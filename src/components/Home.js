import fetch from "cross-fetch";
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableNativeFeedback, View } from "react-native";
import { Navbar } from "./Navbar";
import { styles } from "./styles";
import { host } from "../../env";

export const Home = ({ setBookingData, navigation }) => {
  const [referenceData, setReferenceData] = useState("");
  const [press, setPress] = useState(false);


  const handleClick = async () => {
    try {
      const response = await fetch(`${host}/reference/`, {
        method: "POST",
        body: JSON.stringify({ reference: referenceData}),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        setBookingData(jsonResponse.booking);
        navigation.navigate("Checkin")
      } 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Navbar />
      <View style={styles.containerDarker}></View>
      <View style={styles.container}>
        <View style={styles.formView}>
          <View
            style={{
              marginBottom: 200,
            }}
          >
            <Text style={styles.formTitle}>Booking Reference</Text>
            <TextInput
              style={styles.formInput}
              placeholder="AAA0000"
              placeholderTextColor="#686868"
              value={referenceData}
              onChangeText={(value) => {
                setReferenceData(value);
              }}
            ></TextInput>
          </View>

          <TouchableNativeFeedback onPress={handleClick}>
            <Text style={styles.buttonCheckIn}>CHECK IN</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};
