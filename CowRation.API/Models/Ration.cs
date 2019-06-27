using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class Ration
    {
        public int Id { get; set; }
        public double Value { get; set; }
        public int KormId { get; set; }
        public Korm Korm { get; set; }
        public int TaskId { get; set; }
        public TaskRation Task { get; set; }
    }
}
