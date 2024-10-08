import { useState, useRef } from "react";
import { Text, View, Pressable } from "react-native";
import {
  useCameraPermissions,
  CameraView,
  BarcodeScanningResult,
} from "expo-camera";

import NutrientsBreakdown from "./NutrientsBreakdown";

import { barcodeScannerStyles } from "@/styles/app/components/barcodeScannerStyling";

export default function BarcodeScanner() {
  const [perms, requestPerms] = useCameraPermissions();
  const [scanData, setScanData] = useState<any>({});
  const [isScannerReady, setIsScannerReady] = useState<Boolean>(false);
  const [showResults, setShowResults] = useState<Boolean>(false);

  const cameraRef = useRef<CameraView>(null);

  const styles = { ...barcodeScannerStyles };

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
  //         <Text style={{ textAlign: "center" }}>{scanData}</Text>  // error caused by scan data trying to render, what is this supposed to be?
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
      <View style={styles.UIContainer}>
        <View style={styles.UIWrapper}>
          <Text style={styles.UIText}>Scan the barcode for your food</Text>
        </View>
      </View>
    </CameraView>
  );
}
