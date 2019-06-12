using System.Collections.Generic;
using System.Threading.Tasks;
using CowRation.API.Models;

public interface ILaboratoryRepository
{
    Task<ICollection<LaboratoryIndexFood>> GetLaboratoryIndicators(int userId);
    Task<ICollection<LaboratoryIndexFood>> SetLaboratoryIndicators(int userId, List<LaboratoryIndexFood> indicators);
}