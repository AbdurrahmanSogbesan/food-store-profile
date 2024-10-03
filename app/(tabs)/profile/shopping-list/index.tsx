import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { router } from "expo-router";
export default function ShoppingList() {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => router.push("/profile/shopping-list/1")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
