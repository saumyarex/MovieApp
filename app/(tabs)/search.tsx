import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
  } = useFetch(() => fetchMovies({ query: searchTerm }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await refetch();
    });

    return () => clearTimeout(timeoutId);
  }, [searchTerm, refetch]);
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image source={images.bg} className="absolute top-0 w-full z-0" />

      <ScrollView
        className="px-5"
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
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
          />
        </View>

        {moviesLoading ? (
          <ActivityIndicator size={"large"} />
        ) : moviesError ? (
          <Text className="text-base font-bold text-red-600 mt-10 ml-5">
            Error: {moviesError.message}
          </Text>
        ) : movies ? (
          <>
            <Text className="text-white font-bold text-xl mt-5 ">
              {searchTerm
                ? `Search results for ${searchTerm}`
                : "Latest Movies"}
            </Text>
            <FlatList
              data={movies}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <MovieCard {...item} />}
              scrollEnabled={false}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-5 pb-36"
            />
          </>
        ) : (
          <Text className="text-white font-bold text-xl mt-5">
            No results for {searchTerm}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
