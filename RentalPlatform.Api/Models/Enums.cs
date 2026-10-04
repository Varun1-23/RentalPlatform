namespace RentalPlatform.Api.Models
{
    public enum UserRole
    {
        Admin,
        Vendor,
        Customer,
        Rider
    }

    public enum BookingStatus
    { 
        PendingPayment,
        Confirmed,
        AssignedToRider,
        OutforDelivery,
        Active,
        ReturnRequested,
        ReturnPickup,
        Inspected,
        Completed,
        Cancelled
    }
    public enum DepositStatus
    {
        Held,
        Refunded,
        PartiallyDeducted,
        Forfeited
    }

}
