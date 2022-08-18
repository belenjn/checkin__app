import React from "react";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-nav.png")}
      ></Image>
      <TouchableNativeFeedback>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          {" "}
          Check in
        </Text>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
        <Text style={styles.button} onPress={() => navigation.navigate("Info")}>
          Info
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
};
