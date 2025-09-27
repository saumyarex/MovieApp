import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const MovieDetatils = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>You are watching: {id}</Text>
    </View>
  );
};

export default MovieDetatils;

const styles = StyleSheet.create({});
