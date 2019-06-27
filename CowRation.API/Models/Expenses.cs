namespace CowRation.API.Models
{
    public class Expenses
    {
        public int Id { get; set; }
        public double Amount { get; set; }
        public int ExpendituresId { get; set; }
        public Expenditures Expenditures { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
