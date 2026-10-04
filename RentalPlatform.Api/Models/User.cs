using System.ComponentModel.DataAnnotations;

namespace RentalPlatform.Api.Models
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, EmailAddress, MaxLength(100)]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string PasswordHash { get; set; } = string.Empty;

        public UserRole Role { get; set; } = UserRole.Customer;

        public string? PhoneNumber { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation Properties
        public ICollection<Product> ProductsListed { get; set; } = new List<Product>();
        public ICollection<RentalBooking> CustomerBookings { get; set; } = new List<RentalBooking>();
        public ICollection<RentalBooking> RiderDeliveries { get; set; } = new List<RentalBooking>();

    }
}
