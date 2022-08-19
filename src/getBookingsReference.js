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
        if (booking.reference !== undefined && booking.reference !== "") {
          return booking.reference;
        } else if (booking.reference === undefined) {
          Alert.alert("Error", "Reference doesn't exists", [
            {
              text: "Try again",
              onPress:() => console.log('pressed'),
              style: "cancel",
            },
          ]);
        }
      });
      for (const booking in references) {
        arr.push(references[booking].reference);
      }
      const finalRef = arr.find((ref) => ref === referenceBooking);
      console.log(finalRef);
      return finalRef;
    }
  } catch (err) {
    throw new Error(err);
  }
};
