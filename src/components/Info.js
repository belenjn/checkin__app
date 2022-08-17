import React from "react";
import {
  Image,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { styles } from "./styles";

export const Info = () => {
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
  
    </View>
  </View>
  )
}
