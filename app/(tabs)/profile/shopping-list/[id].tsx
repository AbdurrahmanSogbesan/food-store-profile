import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { useLocalSearchParams } from "expo-router";
import { dummyData } from ".";

export default function ShoppingListDetails() {
  const { id } = useLocalSearchParams();
  const data = useMemo(
    () => dummyData.find((item) => item.id === Number(id)),
    [id]
  );

  return (
    <View>
      <Text>ShoppingListDetails - {data?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
