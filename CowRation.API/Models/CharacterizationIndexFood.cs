namespace CowRation.API.Models
{
    public class CharacterizationIndexFood
    {
        public int Id { get; set; }
        public double Value { get; set; }

        public int CatalogIndexFoodId { get; set; }
        public CatalogIndexFood CatalogIndexFood { get; set; }

        public int KormId { get; set; }
        public Korm Korm { get; set; }
    }
}
