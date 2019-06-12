using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Dtos
{
    public class LaboratoryForView
    {
        public string Name { get; set; }
        public double Sv { get; set; }
        public double Sp { get; set; }
        public double Sg { get; set; }
        public double Sk { get; set; }
    }
}
