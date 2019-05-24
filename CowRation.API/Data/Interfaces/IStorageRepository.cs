using CowRation.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Data
{
    public interface IStorageRepository
    {
        Task<Storage> GetUserStorage(int id);
    }
}
