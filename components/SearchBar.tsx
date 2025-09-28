import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress: () => void;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row justify-start w-full">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A8B5DB"
        className="text-white ml-3 flex-1 "
        value=""
        onPress={onPress}
        onChange={() => {}}
      />
    </View>
  );
};

export default SearchBar;
