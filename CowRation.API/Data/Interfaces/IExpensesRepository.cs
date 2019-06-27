using CowRation.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CowRation.API.Data.Interfaces
{
    public interface IExpensesRepository
    {
        Task<List<Expenses>> GetExpenses(int userId);
        Task<List<Expenses>> ChangeExpenses(int userId, List<Expenses> expenses);

    }
}
