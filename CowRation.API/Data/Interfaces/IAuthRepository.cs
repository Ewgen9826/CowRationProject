using CowRation.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CowRation.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string userName, string password);
        Task<bool> UserExists(string userName);
        Task<int> SetCowCount(int userId, int cowCount);
        Task<int> GetCowCount(int userId);
        Task<List<User>> GetAllUsers();
        Task<int?> RemoveUser(int userId);
    }
}
