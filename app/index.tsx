import { router } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Go to tabs" onPress={() => router.push("/(tabs)/home")} />
    </View>
  );
}
