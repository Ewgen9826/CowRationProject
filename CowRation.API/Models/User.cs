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

        public Storage Storage { get; set; }

        public List<KormUser> KormUsers { get; set; }
        public List<RationResult> RationResults { get; set; }

        public User()
        {
            KormUsers = new List<KormUser>();
            RationResults = new List<RationResult>();
        }
    }
}