import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { host } from "../env";

let arr = [];

export const closeAlert = ({ navigation }) => {
  navigation.navigate("Home");
};

export const getBookingReference = async (referenceBooking) => {
  try {
    const response = await fetch(`${host}/`);
    if (response.ok) {
      const jsonResponse = await response.json();
      const references = jsonResponse.filter((booking) => {
        return booking.reference;
      });
      for (const ref in references) {
        arr.push(references[ref]);
      }

      const finalRef = arr.find((ref) => ref.reference === referenceBooking);
      console.log(finalRef);
      return finalRef;
    }
  } catch (err) {
    throw new Error(err);
  }
};
