using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Data {
    public class AuthRepository : IAuthRepository {
        private readonly DataContext context;

        public AuthRepository (DataContext context) {
            this.context = context;
        }

        public async Task<User> Login (string userName, string password) {
            var user = await context.Users.FirstOrDefaultAsync (u => u.UserName == userName);
            if (user == null)
                return null;
            if (!VerifyPasswordHash (password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash (string password, byte[] passwordHash, byte[] passwordSalt) {
            using (var hmac = new System.Security.Cryptography.HMACSHA512 (passwordSalt)) {
                var computeHash = hmac.ComputeHash (System.Text.Encoding.UTF8.GetBytes (password));
                for (int i = 0; i < computeHash.Length; i++) {
                    if (computeHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        public async Task<User> Register (User user, string password) {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash (password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            user.CowCount = 0;
            await context.AddAsync (user);
            await context.Storages.AddAsync(new Storage { UserId = user.Id });
            await context.FeedingCategories.AddAsync(new FeedingCategory{ UserId = user.Id, });
            foreach (var expenses in context.Expenditures)
            {
                user.Expenses.Add(new Expenses { ExpendituresId = expenses.Id, Amount = 0, UserId = user.Id });
            }
            await context.SaveChangesAsync ();

            return user;
        }

        private void CreatePasswordHash (string password, out byte[] passwordHash, out byte[] passwordSalt) {
            using (var hmac = new System.Security.Cryptography.HMACSHA512 ()) {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash (System.Text.Encoding.UTF8.GetBytes (password));
            }
        }

        public async Task<bool> UserExists (string userName) {
            if (await context.Users.AnyAsync (u => u.UserName == userName)) return true;
            return false;
        }

        public async Task<int> SetCowCount(int userId, int cowCount)
        {
            var user = await context.Users.FirstOrDefaultAsync(u=>u.Id==userId);
            user.CowCount=cowCount;
            await context.SaveChangesAsync();
            return cowCount;
        }

        public async Task<int> GetCowCount(int userId)
        {
             var user = await context.Users.FirstOrDefaultAsync(u=>u.Id==userId);
             return user.CowCount;
        }

        public Task<List<User>> GetAllUsers()
        {
            return context.Users.ToListAsync();
        }

        public async Task<int?> RemoveUser(int userId)
        {
            var user = await context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if (user == null) return null;
            context.Users.Remove(user);
            await context.SaveChangesAsync();
            return user.Id;
        }
    }
}