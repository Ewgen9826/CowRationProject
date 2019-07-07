using CowRation.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CowRation.API.Data {
    public interface IKormReposotory {
        void AddKorm (Korm korm);
        void DeleteKorm (int id);
        Task<CatalogIndexFood> GetCatalogIndexByName(string name);
        void UpdateKorm (int id, Korm korm);
        Task<IEnumerable<Korm>> GetKorms();
        Task<IEnumerable<Korm>> GetUserKorms(int id);
        Task<IEnumerable<Korm>> ChangeKormsForUser(int userId, IEnumerable<Korm> korms);
    }
}