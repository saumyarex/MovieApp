import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ title, icon, focused }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="w-full min-w-[112px] min-h-14 rounded-full overflow-hidden flex flex-row gap-2 p-2 items-center justify-center mt-2"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="w-full flex-row justify-center">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginBottom: 36,
          marginHorizontal: 20,
          height: 46,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title={"Home"} icon={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title={"Search"} icon={icons.search} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title={"Saved"} icon={icons.save} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title={"Profile"} icon={icons.person} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
