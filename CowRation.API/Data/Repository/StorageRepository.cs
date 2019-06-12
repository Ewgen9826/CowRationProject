using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Data
{
    public class StorageRepository : IStorageRepository
    {
        private readonly DataContext context;

        public StorageRepository(DataContext context)
        {
            this.context = context;
        }
<<<<<<< HEAD
        public async Task<List<Korm>> GetUserStorage(int id)
        {
            var user = await context.Users
                .Include(s => s.Storage).ThenInclude(s => s.KormStorages).ThenInclude(s => s.Korm)
                .FirstOrDefaultAsync(u => u.Id == id);
            var korms = user.Storage.KormStorages.Select(ks => ks.Korm).ToList();
            return korms;
=======
        public async Task<Storage> GetUserStorage(int id)
        {
            var user = await context.Users
                .Include(s => s.Storage)
                .ThenInclude(k => k.KormStorages)
                .ThenInclude(k => k.Korm)
                .FirstOrDefaultAsync(u => u.Id == id);
            return user.Storage;
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
        }
    }
}
