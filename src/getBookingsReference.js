import { useNavigation } from "@react-navigation/native";
import { host } from "../env";

let arr = [];

export const getBookingReference = async (referenceBooking) => {
  try {
    const response = await fetch(`${host}/`);
    if (response.ok) {
      const jsonResponse = await response.json();
      const references = jsonResponse.filter((booking) => {
        if (booking.reference !== undefined && booking.reference !== "") {
          return booking.reference;
        }
      });
      for (const booking in references) {
        arr.push(references[booking].reference);
      }
      console.log(arr.find((ref) => ref === referenceBooking)); //es undefined y deberia ser el referenceBooking
    }
  } catch (err) {
    throw new Error(err);
  }
};
