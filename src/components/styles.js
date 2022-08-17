import Constants from "expo-constants";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  // Home styles
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
    height: 100,
    width: "90%",
    justifyContent: "left",
    alignSelf: "center",
    zIndex: 2,
    marginTop: 100,
    maxWidth: 900,
  },
  logo: {
    height: "49%",
    width: "35%",
    alignSelf: "center",
    marginLeft: "7%",
    marginRight: 30
  },
  button: {
    color: "black",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
    marginRight: 50,
  },
  formView: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center"
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
    marginBottom: 50,
    marginRight: 50,
    marginLeft: 50,
    width: 330,
  },
  buttonCheckIn: {
    borderWidth: 0,
    backgroundColor: "#BEAD8E",
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "700",
    letterSpacing: 2.8,
    padding: 20,
    width: 250,
    height: 60,
  },
  // Info styles
  mainContainerInfo: {
    borderColor: "white",
    borderWidth: 1,
    width: "70%",
    height: "30%",
    alignSelf: "center"
  },
  column: {
    height: "20%",
    borderColor: "white",
    borderWidth: 1
  }
});


// 20 20 0 20 padding