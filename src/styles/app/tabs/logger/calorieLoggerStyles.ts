import { StyleSheet } from "react-native";

const calorieLoggerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scannerWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  button: {
    width: "50%",
    borderWidth: 1,
    marginBottom: "5%",
    borderRadius: 10,
    backgroundColor: "#8bc3f0",
  },

  buttonTxt: {
    textAlign: "center",
    fontSize: 20,
  },
});

export { calorieLoggerStyles };
