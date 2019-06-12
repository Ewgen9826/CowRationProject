using CowRation.API.Models;

public class FeedingCategory
{
    public int Id { get; set; }
    public double Weight { get; set; }
    public double Udoy { get; set; }
    public double Fat { get; set; }
    public double Protein { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
}