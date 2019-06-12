using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class KormStorage
    {
        public double FoodValue { get; set; }

        public int KormId { get; set; }
        public Korm Korm { get; set; }

        public int StorageId { get; set; }
        public Storage Storage { get; set; }
    }
}
