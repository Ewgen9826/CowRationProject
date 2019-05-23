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

        public async Task AddKormsForUser(int userId, IEnumerable<Korm> korms)
        {
            var user = await context.Users
                .Include(s => s.Storage)
                .Include(k => k.KormUsers)
                .FirstOrDefaultAsync(u => u.Id == userId);
            var userStorage = user.Storage ;
            foreach (var korm in korms)
            {
                user.KormUsers.Add(new KormUser { KormId = korm.Id, UserId = user.Id });
                userStorage.KormStorages.Add(new KormStorage { KormId = korm.Id, StorageId = userStorage.Id, FoodValue = 0 });
            }
             await context.SaveChangesAsync();
        }

        public async Task RemoveKormsForUser(int userId, IEnumerable<Korm> deleteKorms)
        {
            var user = await context.Users
                        .Include(k => k.KormUsers)
                        .FirstOrDefaultAsync(u => u.Id == userId);
            var userStorage = await context.Storages.Include(s => s.KormStorages)
               .FirstOrDefaultAsync(k => k.UserId == user.Id);
            foreach (var korm in deleteKorms)
            {
                var kormUser = user.KormUsers.FirstOrDefault(k => k.KormId == korm.Id);
                var kormStorage = userStorage.KormStorages.FirstOrDefault(k => k.KormId == korm.Id);
                user.KormUsers.Remove(kormUser);
                userStorage.KormStorages.Remove(kormStorage);
            }
            await context.SaveChangesAsync();
        }

    }
}