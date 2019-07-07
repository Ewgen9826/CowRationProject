using System.ComponentModel.DataAnnotations;

namespace CowRation.API.Dtos {
    public class UserForRegisterDto {
        [Required]
        public string Login { get; set; }

        [Required]
        [StringLength (8, MinimumLength = 8, ErrorMessage = "You must specify password between 4 and 8 charactre")]
        public string Password { get; set; }

        [Required]
        public string CompanyName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}