import { StyleSheet } from "react-native";

const barcodeScannerStyles = StyleSheet.create({
  UIContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  UIWrapper: {
    height: "100%",
    justifyContent: "flex-end",
    paddingBottom: "5%",
  },

  UIText: {
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    padding: 10,
  },

  resultsContainer: {},
});

export { barcodeScannerStyles };
