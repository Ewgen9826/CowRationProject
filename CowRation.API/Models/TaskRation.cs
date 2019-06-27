using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Models
{
    public class TaskRation
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<Ration> Rations { get; set; }
        public TaskRation()
        {
            Rations = new List<Ration>();
        }
    }
}
