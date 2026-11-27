// Booking date validation shared by the booking form.
function validateBookingDates(checkIn, checkOut) {
  if (!checkIn || !checkOut) return { valid: false, message: "Both dates are required." };
  const start = new Date(checkIn + "T00:00:00");
  const end = new Date(checkOut + "T00:00:00");
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return { valid: false, message: "Enter valid dates." };
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (start < today) return { valid: false, message: "Check-in cannot be in the past." };
  if (end <= start) return { valid: false, message: "Check-out must be after check-in." };
  return { valid: true, message: "Booking dates are valid." };
}
if (typeof module !== "undefined") module.exports = { validateBookingDates };