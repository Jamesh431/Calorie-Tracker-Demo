import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { Stack } from "expo-router/stack";
import { Slot } from "expo-router";

export default function rootLayout() {
  const styles = StyleSheet.create({
    safeAreaStyles: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <Slot />
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
    </SafeAreaView>
  );
}
