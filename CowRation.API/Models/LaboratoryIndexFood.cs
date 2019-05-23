using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class LaboratoryIndexFood
    {
        public int Id { get; set; }
        public double Value { get; set; }

        public int CatalogIndexFoodId { get; set; }
        public CatalogIndexFood GetCatalogIndexFood { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
