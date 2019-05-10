
using System.Collections.Generic;
using System.Threading.Tasks;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Data.Repository
{
    public class KormRepository : IKormReposotory<Korm>
    {
        private readonly DataContext context;

        public KormRepository(DataContext context)
        {
            this.context = context;
        }
        public async void AddKorm(Korm korm)
        {
            await context.Korms.AddAsync(korm);
            await context.SaveChangesAsync();
        }

        public async void DeleteKorm(int id)
        {
            var korm = await context.Korms.FirstOrDefaultAsync(k => k.Id == id);
            context.Korms.Remove(korm);
            await context.SaveChangesAsync();

        }

        public async Task<IEnumerable<Korm>> GetKorms()
        {
            var korms = await context.Korms.ToListAsync();
            return korms;
        }

        public void UpdateKorm(int id, Korm korm)
        {
            throw new System.NotImplementedException();
        }
    }
}