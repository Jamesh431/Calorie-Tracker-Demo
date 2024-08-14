import BarcodeScanner from "@/components/BarcodeScanner";
import Camera from "@/components/Camera";
import { useState } from "react";
import { View, Pressable, Text } from "react-native";

export default function CalorieLogger() {
  const [showingCamera, setShowingCamera] = useState<boolean>(false);
  const [showingScanner, setShowingScanner] = useState<boolean>(false);

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
      <Pressable onPress={() => setShowingScanner(true)}>
        <Text>Show SCANNER</Text>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ flex: 0.5 }}>
        <ShowCamera />
      </View> */}

      <View style={{ flex: 0.5 }}>
        <ShowScanner />
      </View>
    </View>
  );
}
