import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-paper";
import QuantityButton from "./QuantityButton";

export default function FoodCard({ item }: { item: any }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={{ width: 78, height: 52 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontSize: 16, lineHeight: 24 }}>{item.name}</Text>
        <Text style={styles.price}>
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 0,
          }).format(item.price)}
        </Text>

        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    backgroundColor: "#fff",
    paddingVertical: 11,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: 82,
    height: 82,
    backgroundColor: "#F3F3F3",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: 11,
    lineHeight: 16.5,
    fontFamily: "Poppins_300Light",
    marginBottom: 4,
  },
});
