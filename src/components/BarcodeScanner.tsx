import { useState, useRef } from "react";
import { Text, View, Pressable } from "react-native";
import {
  useCameraPermissions,
  CameraView,
  BarcodeScanningResult,
} from "expo-camera";

import NutrientsBreakdown from "./NutrientsBreakdown";

export default function BarcodeScanner() {
  const [perms, requestPerms] = useCameraPermissions();
  const [scanData, setScanData] = useState<any>({});
  const [isScannerReady, setIsScannerReady] = useState<Boolean>(false);
  const [showResults, setShowResults] = useState<Boolean>(false);

  const cameraRef = useRef<CameraView>(null);

  const successfulScan = (result: BarcodeScanningResult) => {
    if (isScannerReady) {
      setScanData(result.data);
      // console.log(foodInfo);
      setShowResults(true);
    }
  };

  if (!perms) {
    return (
      <View>
        <Text>This app requires camera permissions</Text>
      </View>
    );
  }

  if (!perms.granted) {
    return (
      <View>
        <Text>This app needs camera permissions</Text>
        <Pressable onPress={requestPerms}>
          <Text>Agree</Text>
        </Pressable>
      </View>
    );
  }

  // if (scanData !== undefined) {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <View style={{ justifyContent: "center", alignItems: "center" }}>
  //         <Text style={{ textAlign: "center" }}>{scanData}</Text>
  //       </View>
  //     </View>
  //   );
  // }

  if (showResults) {
    return (
      <View>
        <View>
          <Text>Scan results: </Text>

          <Pressable onPress={() => setShowResults(false)}>
            <Text>Scan Again</Text>
          </Pressable>
        </View>

        <NutrientsBreakdown foodCode={scanData} />
      </View>
    );
  }

  return (
    <CameraView
      onCameraReady={() => setIsScannerReady(true)}
      onBarcodeScanned={(result) => {
        successfulScan(result);
      }}
      ref={cameraRef}
      barcodeScannerSettings={{
        barcodeTypes: ["ean13", "ean8"],
      }}
      style={{ height: "100%" }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Text>Scan ya food</Text>
        </View>
      </View>
    </CameraView>
  );
}
