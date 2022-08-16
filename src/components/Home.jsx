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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                alignSelf: "center",
                marginLeft: -200,
                marginBottom: 15,
              }}
            >
              Booking Reference
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "#BEAD8E",
                alignSelf: "center",
                paddingBottom: 10,
                width: 330,
              }}
              placeholder="AAA0000"
              placeholderTextColor="#686868"
            ></TextInput>
          </View>

          <TouchableNativeFeedback>
            <Text
              style={{
                borderWidth: 0,
                backgroundColor: "#BEAD8E",
                color: "#FFFFFF",
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: 2.8,
                fontFamily: 'Archivo, sans-serif',
                padding: 20,
                marginLeft: 70,
                marginLeft: 70,
                width: 250,
                height: 60
              }}
            >
              CHECK IN
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

// border: borderWidth borderColor
