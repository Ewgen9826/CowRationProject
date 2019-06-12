using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class LaboratoryIndexFood
    {
        public int Id { get; set; }
<<<<<<< HEAD

        public ICollection<Laboratory> Laboratories { get; set; }
        public int KormId { get; set; }
        public Korm Korm { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public LaboratoryIndexFood()
        {
            Laboratories = new List<Laboratory>();
        }
=======
        public double Value { get; set; }

        public int CatalogIndexFoodId { get; set; }
        public CatalogIndexFood GetCatalogIndexFood { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
    }
}
