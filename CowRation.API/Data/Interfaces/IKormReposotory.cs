using CowRation.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CowRation.API.Data {
    public interface IKormReposotory<T> {
        void AddKorm (T korm);
        void DeleteKorm (int id);
        void UpdateKorm (int id, T korm);
        Task<IEnumerable<T>> GetKorms ();
    }
}