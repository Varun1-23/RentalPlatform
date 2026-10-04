using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentalPlatform.Api.Models
{
    public class Product
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required, MaxLength(50)]
        public string Title { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Description { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Category { get; set; } = string.Empty;

        [Column(TypeName = "decimal(18, 2)")]
        public decimal DailyRate { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal WeeklyRate { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal SecurityDeposit { get; set; }

        public int MinRentalDays { get; set; } = 1;

        public int MaxRentalDays { get; set; } = 30;

        public bool IsAvailable { get; set; } = true;

        public Guid VendorId { get; set; }
        public User Vendor { get; set; } = null!;

        public ICollection<RentalBooking> Bookings { get; set; } = new List<RentalBooking>();
    }
}
