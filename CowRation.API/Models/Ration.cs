using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class Ration
    {
        public int Id { get; set; }
        public double Quantity { get; set; }

        public int RationId { get; set; }
        public RationResult RationResult { get; set; }
    }
}
