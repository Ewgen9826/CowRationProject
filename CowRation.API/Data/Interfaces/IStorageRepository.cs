﻿using CowRation.API.Dtos;
using CowRation.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Data
{
    public interface IStorageRepository
    {
        Task<List<Korm>> GetUserStorage(int id);
        Task<List<Korm>> ChangeKormsValue(int userId, List<StorageForView> kormStorages);
    }
}
