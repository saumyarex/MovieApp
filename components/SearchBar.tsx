import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onPress?: () => void;
  onChange?: (text: string) => void;
  editable?: boolean;
}

const SearchBar = ({
  onPress,
  placeholder,
  onChange,
  value,
  editable = true,
}: Props) => {
  const Content = (
    <View className="flex-row justify-start items-center w-full">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A8B5DB"
        className="text-white ml-3 "
        value={value ?? ""}
        onChangeText={onChange}
        editable={editable}
        showSoftInputOnFocus={editable} // prevents keyboard if not editable
      />
    </View>
  );

  return editable ? (
    Content
  ) : (
    <TouchableOpacity onPress={onPress}>{Content}</TouchableOpacity>
  );
};

export default SearchBar;
