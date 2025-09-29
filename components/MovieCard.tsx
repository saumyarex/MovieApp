import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}: any) => {
  return (
    <View className="w-[30%] mb-4">
      <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="w-full">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />
          <Text
            className="text-white text-base font-semibold mt-2"
            numberOfLines={1}
          >
            {title}
          </Text>
          <View className="flex-row justify-start gap-2">
            <Image source={icons.star} />
            <Text className="text-white text-base font-semibold">
              {Math.round(vote_average)}
            </Text>
          </View>

          <View className="flex-row justify-between gap-2">
            <Text className="text-white font-light text-xs">
              {release_date?.split("-")[0]}
            </Text>
            <Text className="text-white font-light text-xs">MOVIE</Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default MovieCard;
