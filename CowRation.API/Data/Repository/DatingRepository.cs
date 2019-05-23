using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext context;

        public DatingRepository(DataContext context)
        {
            this.context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await context.Users.Include(k => k.KormUsers).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await context.Users.Include(k => k.KormUsers).ToListAsync();
            return users;
        }
        public async void AddKormToUser(int userId, int kormId)
        {
            var user = await context.Users.Include(k => k.KormUsers).FirstOrDefaultAsync();
            var korm = await context.Korms.FirstOrDefaultAsync();
            if(user==null || korm==null)
                return;
            user.KormUsers.Add(new KormUser { KormId = kormId, UserId = userId });
        }
        public async Task<bool> SaveAll()
        {
            return await context.SaveChangesAsync() > 0;
        }
    }
}
