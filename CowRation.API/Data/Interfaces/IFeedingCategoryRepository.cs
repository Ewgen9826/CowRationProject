using System.Threading.Tasks;

public interface IFeedingCategoryRepository
{
    Task<FeedingCategory> GetFeedingCategory(int id);
    Task SetFeedingCategory(int userId, FeedingCategory feedingCategory);
}