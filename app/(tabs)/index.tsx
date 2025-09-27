import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-5xl font-bold text-blue-500">Movies App</Text>
      <Link href={"/movies/avengers"} className="text-white text-3xl">
        Avengers
      </Link>
    </View>
  );
}
