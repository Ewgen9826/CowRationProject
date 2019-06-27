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

    public async Task<ICollection<LaboratoryIndexFood>> SetLaboratoryIndicators(int userId, List<LaboratoryIndexFood> indicators)
    {
        var user = await context.Users
            .Include(l => l.LaboratoryIndexFoods)
            .ThenInclude(l => l.Laboratories)
            .ThenInclude(l => l.CatalogIndexFood)
            .Include(l => l.LaboratoryIndexFoods).ThenInclude(l => l.Korm)
            .FirstOrDefaultAsync(u => u.Id == userId);
        foreach (var laboratory in indicators)
        {
            var oldLaboratory = user.LaboratoryIndexFoods.FirstOrDefault(l => l.KormId == laboratory.KormId);
            if (oldLaboratory == null) break;
            oldLaboratory.Laboratories = laboratory.Laboratories;
        }
        user.LaboratoryIndexFoods.Clear();
        user.LaboratoryIndexFoods.AddRange(indicators);
        await context.SaveChangesAsync();
        return user.LaboratoryIndexFoods;
    }

    public async Task<Korm> GetKormByName(string name)
    {
        var korm = await context.Korms.FirstOrDefaultAsync(k => k.Name == name);
        return korm;
    }
    public async Task<CatalogIndexFood> GetCatalogIndexByName(string name)
    {
        var catalogIndex = await context.CatalogIndexFoods.FirstOrDefaultAsync(c => c.Name == name);
        return catalogIndex;
    }
}