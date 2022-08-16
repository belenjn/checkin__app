import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: "center",
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
      justifyContent: "center",
      alignSelf: "center",
    },
    navbar: {
      backgroundColor: "white",
      flexDirection: "row",
      position: "absolute",
      height: 120,
      width: 900,
      justifyContent: "left",
      alignSelf: "center",
      zIndex: 2,
      marginTop: 100,
      maxWidth: 900
    },
    logo: {
      height: 100,
      width: 250,
      marginTop: 10,
      marginRight: 50,
      marginLeft: 10,
    },
    button: {
      color: "black",
      textAlign: "center",
      alignSelf: "center",
      marginTop: 20,
      marginRight: 50
  
    },
    formView: {
        backgroundColor: "#333333",
        borderWidth: 2,
        borderColor: "red",
     
    }
  });