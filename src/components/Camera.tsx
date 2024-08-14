import { useRef, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import {
  CameraCapturedPicture,
  CameraPictureOptions,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

import { FlashType } from "@/util/types/stateTypes";

export default function Camera() {
  const [showingPreview, setShowingPreview] = useState<Boolean>(false);
  const [isCamReady, setIsCamReady] = useState<Boolean>(false);
  const [FlashType, setFlashType] = useState<FlashType>("off");
  const [imageObj, setImageObj] = useState<CameraCapturedPicture>({
    base64: "",
    uri: "",
    width: 0,
    height: 0,
  });
  const [cameraOrientation, setCameraOrientation] =
    useState<CameraType>("back");

  const [perms, requestPerms] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const changeCamDirection = () => {
    setCameraOrientation((prev) => (prev === "front" ? "back" : "front"));
  };

  const toggleFlashOptions = () => {
    const optionsArr = ["off", "on", "auto"] as FlashType[];
    const currentPos = optionsArr.indexOf(FlashType);

    if (currentPos === -1 || currentPos === optionsArr.length - 1) {
      setFlashType(optionsArr[0] as FlashType);
    } else {
      setFlashType(optionsArr[currentPos + 1] as FlashType);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current && isCamReady) {
      const options = {
        base64: true,
        imageType: "png",
      } as CameraPictureOptions;

      const photo = (await cameraRef.current.takePictureAsync(
        options
      )) as CameraCapturedPicture;

      setImageObj(photo);
      setShowingPreview(true);
    }
  };

  const confirmPicture = () => {
    setShowingPreview(false);
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

  const cameraPreview = () => {
    return (
      <CameraView
        facing={cameraOrientation}
        videoQuality="1080p"
        flash={FlashType}
        onCameraReady={() => setIsCamReady(true)}
        ref={cameraRef}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ paddingLeft: 30 }}>
            {imageObj?.uri ? (
              <Pressable onPress={() => setShowingPreview(true)}>
                <Image
                  source={{ uri: imageObj.uri }}
                  contentFit="cover"
                  transition={1000}
                />
              </Pressable>
            ) : null}
          </View>

          <View>
            <Pressable onPress={changeCamDirection}>
              <MaterialCommunityIcons
                name="camera-flip"
                size={40}
                color="white"
              />
            </Pressable>

            <Pressable onPress={takePicture}>
              <MaterialCommunityIcons
                name="circle-slice-8"
                size={90}
                color="white"
              />
            </Pressable>

            <Pressable onPress={toggleFlashOptions}>
              <MaterialIcons
                name={`flash-${FlashType}`}
                size={40}
                color="white"
              />
            </Pressable>
          </View>
        </View>
      </CameraView>
    );
  };

  const imagePreview = () => {
    return (
      <ImageBackground
        source={{ uri: imageObj?.uri }}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View>
          <Pressable onPress={() => setShowingPreview(false)}>
            <MaterialCommunityIcons
              name="camera-retake"
              size={50}
              color="white"
            />
          </Pressable>

          <Pressable onPress={confirmPicture}>
            <MaterialCommunityIcons name="check-bold" size={50} color="white" />
          </Pressable>
        </View>
      </ImageBackground>
    );
  };

  return <View>{!showingPreview ? cameraPreview() : imagePreview()}</View>;
}
