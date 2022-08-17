import React from "react";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import { styles } from "./styles";

export const Checkin = () => {
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
      <Text style={styles.titleInfo}>THANK YOU, YOU HAVE SUCCESSFULLY CHECKED IN </Text>
      <View style={styles.mainContainerInfo}>
        <View style={styles.bookingColumn}>
          <Text style={styles.bookingDetailsText}>BOOKING DETAILS</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.tableText}>CHECKIN DATE: </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.tableText}>CHECKOUT DATE:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.tableText}>NUMBER OF GUESTS: </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.tableText}>TOTAL PRICE: €</Text>
        </View>

        <TouchableNativeFeedback>
            <Text style={styles.buttonDone}>DONE</Text>
          </TouchableNativeFeedback>
      </View>
    </View>
  </View>
  );
};
