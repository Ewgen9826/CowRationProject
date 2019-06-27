using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class LaboratoryIndexFood
    {
        public int Id { get; set; }

        public ICollection<Laboratory> Laboratories { get; set; }
        public int KormId { get; set; }
        public Korm Korm { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public LaboratoryIndexFood()
        {
            Laboratories = new List<Laboratory>();
        }
    }
}
