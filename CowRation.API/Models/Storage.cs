using System.Collections.Generic;

namespace CowRation.API.Models
{
    public class Storage
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public ICollection<KormStorage> KormStorages { get; set; }

        public Storage()
        {
            KormStorages = new List<KormStorage>();
        }
    }
}
