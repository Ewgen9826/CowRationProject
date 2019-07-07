using CowRation.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Dtos
{
    public class KormForManagment
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public List<CharacterizationIndexFoodDto> CharacterizationIndexFoods { get; set; }
    }
}
