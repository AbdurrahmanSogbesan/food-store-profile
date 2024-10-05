import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { ComponentProps } from "react";
import { Text } from "react-native-paper";

interface ButtonProps extends ComponentProps<typeof TouchableOpacity> {
  text: string;
  styles?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  small?: boolean;
}

export default function Button({
  text,
  styles,
  isLoading,
  small,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[stylesheet.container, styles]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ fontSize: small ? 12 : 16 }}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // width: "100%",
    height: 48,
    justifyContent: "center",
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: "#797979",
    borderRadius: 36,
  },
});
