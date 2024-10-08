import { StyleSheet } from "react-native";

const basicButton = StyleSheet.create({
  btn: {
    width: "50%",
    borderWidth: 1,
    marginBottom: "5%",
    borderRadius: 10,
  },

  txt: {
    textAlign: "center",
    fontSize: 20,
  },
});

const basicBlueButtonStyles = StyleSheet.create({
  basicBlueBtn: {
    ...basicButton.btn,
    backgroundColor: "#8bc3f0",
  },

  basicBtnTxt: {
    ...basicButton.txt,
  },
});

const basicDisabledButtonStyles = StyleSheet.create({
  basicDisabledBtn: {
    ...basicButton.btn,
    backgroundColor: "gray",
  },

  basicDisabledBtnTxt: {
    ...basicButton.txt,
    color: "#c4c1c1",
  },
});

export { basicBlueButtonStyles, basicDisabledButtonStyles };
