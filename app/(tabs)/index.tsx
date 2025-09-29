import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image source={images.bg} className="absolute top-0 w-full " />

      <ScrollView
        className="px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="mt-20 w-12 h-10 mb-10 mx-auto" />
        <View className="w-full flex-row justify-start px-3">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
            editable={false}
          />
        </View>

        {moviesLoading ? (
          <ActivityIndicator size={"large"} className="mt-10" />
        ) : moviesError ? (
          <Text className="text-base font-bold text-red-600 mt-10 ml-5">
            {" "}
            Error: {moviesError.message}{" "}
          </Text>
        ) : (
          <>
            <Text className="text-xl font-bold text-white mt-5 mb-3">
              Latest Movies{" "}
            </Text>
            <FlatList
              data={movies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MovieCard {...item} />}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}
