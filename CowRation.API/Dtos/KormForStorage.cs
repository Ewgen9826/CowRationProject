﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Dtos
{
    public class KormForStorage
    {
        public int KormId { get; set; }
        public int StorageId { get; set; }
        public string Name { get; set; }
        public double FoodValue { get; set; }
    }
}
