import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function Button({
  text,
  onPress,
  styles,
}: {
  text: string;
  onPress: VoidFunction;
  styles?: StyleProp<ViewStyle>;
}) {
  return (
    <TouchableOpacity
      style={[stylesheet.container, styles]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: "#797979",
    borderRadius: 36,
  },
});
