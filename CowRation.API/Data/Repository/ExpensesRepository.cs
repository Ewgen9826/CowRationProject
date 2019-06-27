using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Data.Interfaces;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Data.Repository
{
    public class ExpensesRepository : IExpensesRepository
    {
        private readonly DataContext context;

        public ExpensesRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<List<Expenses>> ChangeExpenses(int userId, List<Expenses> expenses)
        {
            var user = await context.Users
               .Include(e => e.Expenses).ThenInclude(e => e.Expenditures)
               .FirstOrDefaultAsync(u => u.Id == userId);
            foreach (var exp in expenses)
            {
                var newExp = user.Expenses.FirstOrDefault(e => e.ExpendituresId == exp.ExpendituresId);
                newExp.Amount = exp.Amount;
            }
            await context.SaveChangesAsync();
            return user.Expenses.ToList();
        }

        public async Task<List<Expenses>> GetExpenses(int userId)
        {
            var user = await context.Users
                .Include(e=>e.Expenses).ThenInclude(e=>e.Expenditures)
                .FirstOrDefaultAsync(u => u.Id == userId);
            return user.Expenses.ToList();
        }
    }
}
