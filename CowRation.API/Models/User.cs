using System.Collections.Generic;
namespace CowRation.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int CowCount { get; set; }

        public string Role { get; set; }

        public Storage Storage { get; set; }

        public List<KormUser> KormUsers { get; set; }

        public List<LaboratoryIndexFood> LaboratoryIndexFoods { get; set; }

        public FeedingCategory FeedingCategory { get; set; }

        public List<Expenses> Expenses { get; set; }

        public User()
        {
            KormUsers = new List<KormUser>();
            LaboratoryIndexFoods = new List<LaboratoryIndexFood>();
            Expenses = new List<Expenses>();
        }
    }
}