using CowRation.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CowRation.API.Data
{
    public interface IRationRepository
    {
        Task<List<Ration>> GetRations(int userId);
        Task<List<Ration>> CalcRations(int userId);
    }
}
