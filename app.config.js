export default () => {
  return {
    expo: {
      name: "CalorieTracker",
      slug: "CalorieTracker",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      ios: {
        supportsTablet: true,
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      scheme: "calorieTracker",
      plugins: [
        [
          "expo-camera",
          {
            cameraPermission: "Allow app to access your camera?",
            microphonePermission: "Allow app to access your microphone?",
            recordAudioAndroid: true,
          },
        ],
      ],
    },
  };
};
