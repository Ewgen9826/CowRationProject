using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Data.Repository
{
    public class KormRepository : IKormReposotory
    {
        private readonly DataContext context;

        public KormRepository(DataContext context)
        {
            this.context = context;
        }

        public async void AddKorm(Korm korm)
        {
            await context.Korms.AddAsync(korm);
            await context.SaveChangesAsync();
        }

        public async void DeleteKorm(int id)
        {
            var korm = await context.Korms.FirstOrDefaultAsync(k => k.Id == id);
            context.Korms.Remove(korm);
            await context.SaveChangesAsync();

        }

        public async Task<IEnumerable<Korm>> GetKorms()
        {
            var korms = await context.Korms.ToListAsync();
            return korms;
        }

        public async Task<IEnumerable<Korm>> GetUserKorms(int id)
        {
            var user = await context.Users
                .Include(k => k.KormUsers).ThenInclude(u => u.Korm)
                .FirstOrDefaultAsync(u => u.Id == id);
            var korms = user.KormUsers.Select(k => k.Korm).ToList();
            return korms;
        }

        public void UpdateKorm(int id, Korm korm)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Korm>> ChangeKormsForUser(int userId, IEnumerable<Korm> korms)
        {
            var user = await context.Users
                .Include(s => s.Storage).ThenInclude(s => s.KormStorages)
                .Include(k => k.KormUsers).ThenInclude(k => k.Korm)
                .Include(l => l.LaboratoryIndexFoods).ThenInclude(l => l.Laboratories)
                .FirstOrDefaultAsync(u => u.Id == userId);
            var oldKorms = await GetUserKorms(userId);
            var addKorms = korms.Where(k => !oldKorms.Any(oldK => k.Name == oldK.Name));
            //Add Korms
            foreach (var korm in addKorms)
            {
                user.KormUsers.Add(new KormUser { KormId = korm.Id, UserId = user.Id });
                user.Storage.KormStorages.Add(new KormStorage { KormId = korm.Id, StorageId = user.Storage.Id, FoodValue = 0 });
                var indicators = new List<Laboratory>();
                var sv = await context.CatalogIndexFoods.FirstOrDefaultAsync(c => c.Name == "СВ");
                var sp = await context.CatalogIndexFoods.FirstOrDefaultAsync(c => c.Name == "СП");
                var sg = await context.CatalogIndexFoods.FirstOrDefaultAsync(c => c.Name == "СЖ");
                var sk = await context.CatalogIndexFoods.FirstOrDefaultAsync(c => c.Name == "СК");
                indicators.AddRange(new List<Laboratory>
            {
                new Laboratory {CatalogIndexFoodId=sv.Id, Value=0},
                new Laboratory {CatalogIndexFoodId=sp.Id, Value=0},
                new Laboratory {CatalogIndexFoodId=sg.Id, Value=0},
                new Laboratory {CatalogIndexFoodId=sk.Id, Value=0},
            });

                user.LaboratoryIndexFoods.Add(new LaboratoryIndexFood
                {
                    KormId = korm.Id,
                    UserId = user.Id,
                    Laboratories = indicators
                });
            }
            //Remove Korms
            var removeKorms = oldKorms.Where(oldK => !korms.Any(k => oldK.Name == k.Name));
            foreach (var korm in removeKorms)
            {
                user.KormUsers.Remove(user.KormUsers.FirstOrDefault(k=>k.KormId==korm.Id));
                user.Storage.KormStorages.Remove(user.Storage.KormStorages.FirstOrDefault(k => k.KormId == korm.Id));
                var catalogIndexFood = user.LaboratoryIndexFoods.FirstOrDefault(l => l.KormId == korm.Id);
                user.LaboratoryIndexFoods.Remove(catalogIndexFood);
            }

            await context.SaveChangesAsync();
            var newKorms = await GetUserKorms(userId);
            return newKorms;
        }
    }
}