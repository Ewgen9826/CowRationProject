using CowRation.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CowRation.API.Data
{
    public interface IDatingRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        void AddKormToUser(int userId, int kormId);

    }
}
