import React from "react";
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { Navbar } from "./Navbar";
import { styles } from "./styles";

export const Home = () => {
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
            ></TextInput>
          </View>

          <TouchableNativeFeedback>
            <Text style={styles.buttonCheckIn}>CHECK IN</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};
