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
        public async Task<List<Korm>> GetUserStorage(int id)
        {
            var user = await context.Users
                .Include(s => s.Storage).ThenInclude(s => s.KormStorages).ThenInclude(s => s.Korm)
                .FirstOrDefaultAsync(u => u.Id == id);
            var korms = user.Storage.KormStorages.Select(ks => ks.Korm).ToList();
            return korms;
        }
    }
}
