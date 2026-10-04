using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentalPlatform.Api.Models
{
    public class RentalBooking
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required, MaxLength(50)]
        public string BookingNumber { get; set; } = "RN-" + Guid.NewGuid().ToString()[..8].ToUpper();

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal TotalRentalFee { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal DepositAmount { get; set; }

        public DepositStatus DepositStatus { get; set; } = DepositStatus.Held;

    }
}
