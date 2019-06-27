using CowRation.API.Helpers;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Data.Repository
{
    public class RationRepository : IRationRepository
    {
        private readonly DataContext context;

        public RationRepository(DataContext context)
        {
            this.context = context;
        }
        public async Task<List<Ration>> CalcRations(int userId)
        {
            var user = await context.Users
                .Include(k => k.KormUsers).ThenInclude(k => k.Korm)
                .FirstOrDefaultAsync(u => u.Id == userId);
            var catalogIndexFoods = await context.CatalogIndexFoods.ToListAsync();

            int n = catalogIndexFoods.Count() + 1;
            int m = user.KormUsers.Count() + 1;
            var table = new double[n, m];

            for (int i = 0; i < n - 1; i++)
            {
                table[i, 0] = catalogIndexFoods[i].Limitation * -1;
                var charactereizations = context.CharacterizationIndexFoods
                       .Include(k => k.Korm)
                       .Include(c => c.CatalogIndexFood)
                       .Where(c => c.CatalogIndexFoodId == catalogIndexFoods[i].Id).ToList();
                for (int j = 1; j < m; j++)
                {
                    table[i, j] = Math.Abs(charactereizations[j - 1].Value) * -1;
                }
            }

            for (int i = 1; i < m; i++)
            {
                double c = user.KormUsers[i - 1].Korm.Price * -1;
                table[n - 1, i] = c;
            }
            table[n - 1, 0] = 0;
            var result = new double[user.KormUsers.Count()];
            double[,] table_result;
            Simplex S = new Simplex(table);
            table_result = S.Calculate(result);
            var taskRation = new TaskRation
            {
                User = user,
                UserId = user.Id,
                Rations = new List<Ration>()
            };
            for (int i = 0; i < user.KormUsers.Count; i++)
            {
                if (result[i] == 0) break;
                var ration = new Ration
                {
                    KormId = user.KormUsers[i].KormId,
                    Value = result[i]
                };
                taskRation.Rations.Add(ration);
            }
            await context.TaskRations.AddAsync(taskRation);
            await context.SaveChangesAsync();
            return taskRation.Rations.ToList();
        }

        public async Task<List<Ration>> GetRations(int userId)
        {
            var taskRation = await context.TaskRations
                                        .Include(r => r.Rations).ThenInclude(k => k.Korm)
                                        .FirstOrDefaultAsync(u => u.UserId == userId);
            return taskRation?.Rations.ToList();

        }
    }
}
