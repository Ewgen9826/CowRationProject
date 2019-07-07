using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class Korm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public List<KormUser> KormUsers { get; set; }
        public List<KormStorage> KormStorages { get; set; }
        public List<CharacterizationIndexFood> CharacterizationIndexFoods { get; set; }
        public Korm()
        {
            KormStorages = new List<KormStorage>();
            KormUsers = new List<KormUser>();
            CharacterizationIndexFoods = new List<CharacterizationIndexFood>();
        }
    }
}
