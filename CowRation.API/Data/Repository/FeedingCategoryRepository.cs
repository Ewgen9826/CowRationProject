using System.Threading.Tasks;
using CowRation.API.Data;
using Microsoft.EntityFrameworkCore;

public class FeedingCategoryRepository : IFeedingCategoryRepository
{
    private readonly DataContext context;

    public FeedingCategoryRepository(DataContext context)
    {
        this.context = context;
    }
    public async Task<FeedingCategory> GetFeedingCategory(int userId)
    {
        var user = await context.Users.Include(f => f.FeedingCategory)
        .FirstOrDefaultAsync(u => u.Id == userId);
        if(user.FeedingCategory==null) return null;
        return user.FeedingCategory;
    }

    public async Task SetFeedingCategory(int userId, FeedingCategory feedingCategory)
    {
        var user = await context.Users.Include(f => f.FeedingCategory)
        .FirstOrDefaultAsync(u => u.Id == userId);
        user.FeedingCategory = feedingCategory;
        await context.SaveChangesAsync();
    }
}
