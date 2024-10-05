import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

export default function ShoppingCard({ item }: { item: any }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchPress = (event: GestureResponderEvent) => {
    event.stopPropagation();
    setIsSwitchOn((prev) => !prev);
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        router.navigate(`/(tabs)/profile/shopping-list/${item.id}`)
      }
    >
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.count}>
          {item.count} {item.count > 1 ? "products" : "product"}
        </Text>
        <Text style={styles.frequency}>{item.frequency}</Text>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <Pressable onPress={handleSwitchPress}>
          <Switch
            value={isSwitchOn}
            onValueChange={setIsSwitchOn}
            trackColor={{ false: "#C6C6C6", true: "#00B00A" }}
            thumbColor={"#D8D8D8"}
            style={styles.switch}
          />
        </Pressable>
        <Text style={{ fontSize: 16 }}>
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 0,
          }).format(item.amount)}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderColor: "#121212",
    borderRadius: 10,
    paddingVertical: 19,
    paddingHorizontal: 18,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  name: { fontSize: 16, lineHeight: 24 },
  count: { color: "#727272", fontFamily: "Poppins_300Light", lineHeight: 16.5 },
  frequency: { fontSize: 10, lineHeight: 12 },
  switch: {
    transform: [
      { scaleX: Platform.OS === "android" ? 1 : 0.64 },
      { scaleY: Platform.OS === "android" ? 1 : 0.64 },
    ],
    alignSelf: "flex-end",
  },
});
