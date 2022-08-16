import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { styles } from "./styles";

export const Home = () => {
  return (
    <View>
      <View style={styles.navbar}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-nav.png")}
        ></Image>
        <TouchableNativeFeedback>
          <Text style={styles.button}> Check in</Text>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <Text style={styles.button}>Info</Text>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.containerDarker}></View>
      <View style={styles.container}>
        <View style={styles.formView}>
          <View>
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

// border: borderWidth borderColor
