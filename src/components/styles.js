import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    maxWidth: "95%",
    minWidth: 300
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
    maxWidth: 900,
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
    marginRight: 50,
  },
  formView: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  formTitle: {
    color: "white",
    fontWeight: "700",
    alignSelf: "center",
    marginLeft: -200,
    marginBottom: 15,
  },
  formInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#BEAD8E",
    alignSelf: "center",
    paddingBottom: 10,
    width: 330,
  },
  buttonCheckIn: {
    borderWidth: 0,
    backgroundColor: "#BEAD8E",
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 2.8,
    padding: 20,
    marginLeft: 70,
    marginLeft: 70,
    width: 250,
    height: 60,
  },
});
