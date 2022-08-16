import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
  return (
    <View>
      <View style={styles.navbar}></View>
      <View style={styles.containerDarker}></View>
      <View style={styles.container}></View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   containerDarker: {
//     marginTop: Constants.statusBarHeight,
//     backgroundColor: "#222222",
//     height: 100,
//   },
//   container: {
//     backgroundColor: "#333333",
//     width: "100%",
//     height: "90%",
//   },
//   navbar: {
//     position: "absolute",
//     top: 80,
//     left: 30,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     width: 750,
//     height: 100,
//     zIndex: 2
//   }
// });

const styles = StyleSheet.create({
    mainContainer : {
        justifyContent: "center"
    },
    containerDarker: {
      marginTop: Constants.statusBarHeight,
      backgroundColor: "#222222",
      height: 120,
    },
    container: {
      backgroundColor: "#333333",
      width: "100%",
      height: "90%",
    },
    navbar: {
        backgroundColor: "white",
        position: "absolute",
        height: 120,
        width: 1000,
        alignSelf: "center",
        zIndex: 2,
        marginTop: 100
    }
  });
