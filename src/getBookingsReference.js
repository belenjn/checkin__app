import { host } from "../env";

export const getBookingReference = async (reference) => {
  const response = await fetch(`${host}/${reference}`);
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse.reference)
    const bookingReference = jsonResponse.reference
    return bookingReference
  }
};
