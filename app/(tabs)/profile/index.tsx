import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon, Text } from "react-native-paper";
import icons from "@/constants/icons";
import { router } from "expo-router";

const profileImage = require("@/assets/images/profile-image.png");

const profileButtons = [
  {
    icon: icons.profileDetails,
    title: "Profile Details",
    onPress: () => router.push("/(tabs)/profile/details"),
  },
  {
    icon: icons.shopping,
    title: "Shopping List",
    onPress: () => router.push("/(tabs)/profile/shopping-list"),
  },
  {
    icon: icons.shopping,
    title: "Group Buy",
    onPress: () => console.log("Route to Group Buy"),
  },
  {
    icon: icons.creditCard,
    title: "Wallet",
    onPress: () => router.push("/(tabs)/profile/wallet"),
  },
  {
    icon: icons.location,
    title: "Addresses",
    onPress: () => router.push("/(tabs)/profile/address"),
  },
  {
    icon: icons.support,
    title: "Help & Support",
    onPress: () => console.log("Route to Help & Support"),
  },
  {
    icon: icons.settings,
    title: "Settings",
    onPress: () => console.log("Route to Settings"),
  },
  {
    icon: icons.logout,
    title: "Logout",
    onPress: () => console.log("Log out"),
  },
];

export default function Profile() {
  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      contentContainerStyle={styles.container}
    >
      <View style={{ gap: 7, marginBottom: 23, alignItems: "center" }}>
        <Image
          source={profileImage}
          width={100}
          height={100}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 12 }}>John Doe</Text>
      </View>

      <View style={{ gap: 15, width: "100%" }}>
        {profileButtons.map(({ title, icon, onPress }, index) => (
          <TouchableOpacity
            key={index}
            style={styles.profileButton}
            activeOpacity={0.7}
            onPress={onPress}
          >
            <Icon source={icon} size={20} />
            <Text style={{}}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 21,
    paddingHorizontal: 13,
    paddingBottom: 14,
  },
  profileButton: {
    borderWidth: 0.5,
    borderColor: "#12121299",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 10,
    paddingVertical: 21,
  },
});
