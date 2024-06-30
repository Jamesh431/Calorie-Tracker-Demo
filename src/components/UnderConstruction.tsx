import { Text, View } from "react-native";
import { Image } from "expo-image";

export default function UnderContstruction() {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={{ uri: "@assets/under-construction.jpg" }} />
      </View>

      <View>
        <Text style={{ fontSize: 77, color: "yellow" }}>COMING SOON</Text>
      </View>
    </View>
  );
}
