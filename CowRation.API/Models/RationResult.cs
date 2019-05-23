using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class RationResult
    {
        public int Id { get; set; }
        public double Weight { get; set; }
        public double MilkCount { get; set; }
        public double Fat { get; set; }
        public double Protein { get; set; }

        public ICollection<Ration> Rations { get; set; }

        public RationResult()
        {
            Rations = new List<Ration>();
        }
    }

}
