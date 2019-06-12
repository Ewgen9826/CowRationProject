using CowRation.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CowRation.API.Data
{
    public interface IStorageRepository
    {
<<<<<<< HEAD
        Task<List<Korm>> GetUserStorage(int id);
=======
        Task<Storage> GetUserStorage(int id);
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
    }
}
