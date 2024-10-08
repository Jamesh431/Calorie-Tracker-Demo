import { useState } from "react";
import { View, Pressable, Text } from "react-native";

import BarcodeScanner from "@/components/BarcodeScanner";
import Camera from "@/components/Camera";

import { calorieLoggerStyles } from "@/styles/app/tabs/logger/calorieLoggerStyles";

export default function CalorieLogger() {
  const [showingCamera, setShowingCamera] = useState<boolean>(false);
  const [showingScanner, setShowingScanner] = useState<boolean>(false);

  const styles = { ...calorieLoggerStyles };

  const ShowCamera = () => {
    if (showingCamera) {
      return (
        <View>
          <Camera />
        </View>
      );
    }

    return (
      <Pressable onPress={() => setShowingCamera(true)}>
        <Text>Show Camera</Text>
      </Pressable>
    );
  };

  const ShowScanner = () => {
    if (showingScanner) {
      return (
        <View>
          <BarcodeScanner />
        </View>
      );
    }

    return (
      <Pressable onPress={() => setShowingScanner(true)} style={styles.button}>
        <Text style={styles.buttonTxt}>Show barcode scanner</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={{ flex: 0.5 }}> // this is for taking progress pics, not mounted yet
        <ShowCamera />
      </View> */}

      <View style={showingScanner ? null : styles.scannerWrapper}>
        <ShowScanner />
      </View>
    </View>
  );
}
