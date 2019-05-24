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
        public async Task<Storage> GetUserStorage(int id)
        {
            var user = await context.Users
                .Include(s => s.Storage)
                .ThenInclude(k => k.KormStorages)
                .ThenInclude(k => k.Korm)
                .FirstOrDefaultAsync(u => u.Id == id);
            return user.Storage;
        }
    }
}
