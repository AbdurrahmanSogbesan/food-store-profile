import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import icons from "@/constants/icons";

interface QuantityButtonProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantityButton({
  quantity,
  setQuantity,
}: QuantityButtonProps) {
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev !== 0 ? prev - 1 : prev));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={decreaseQuantity}
        style={[styles.button, styles.leftButton]}
        activeOpacity={0.6}
      >
        <Icon source={icons.minus} size={7} />
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.rightButton]}
        activeOpacity={0.6}
        onPress={increaseQuantity}
      >
        <Icon source={icons.plus} size={7} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 18.64,
  },
  button: {
    paddingHorizontal: 9.3,
    height: 18.64,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#000",
  },
  leftButton: {
    borderRightWidth: 0,
    borderTopLeftRadius: 3.8,
    borderBottomLeftRadius: 3.8,
  },
  rightButton: {
    borderLeftWidth: 0,
    borderTopRightRadius: 3.8,
    borderBottomRightRadius: 3.8,
  },
  quantityContainer: {
    paddingHorizontal: 9.3,
    height: 18.64,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#000",
  },
  quantityText: {
    fontSize: 12.43,
  },
});
