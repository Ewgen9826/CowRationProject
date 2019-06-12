using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class Laboratory
    {
        public int Id { get; set; }
        public double Value { get; set; }
        public int CatalogIndexFoodId { get; set; }
        public CatalogIndexFood CatalogIndexFood { get; set; }
    }
}
