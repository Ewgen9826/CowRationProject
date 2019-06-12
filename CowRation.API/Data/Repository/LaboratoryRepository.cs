using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Data;
using CowRation.API.Models;
using Microsoft.EntityFrameworkCore;

public class LaboratoryRepository : ILaboratoryRepository
{
    private readonly DataContext context;

    public LaboratoryRepository(DataContext context)
    {
        this.context = context;
    }

    public async Task<ICollection<LaboratoryIndexFood>> GetLaboratoryIndicators(int userId)
    {
        var user = await context.Users
            .Include(l=>l.LaboratoryIndexFoods)
            .ThenInclude(l=>l.Laboratories)
            .ThenInclude(l=>l.CatalogIndexFood)
            .Include(l=>l.LaboratoryIndexFoods).ThenInclude(l=>l.Korm)
            .FirstOrDefaultAsync(u => u.Id == userId);
        return user.LaboratoryIndexFoods;
    }

    public Task<ICollection<LaboratoryIndexFood>> SetLaboratoryIndicators(int userId, List<LaboratoryIndexFood> indicators)
    {
        throw new System.NotImplementedException();
    }
}