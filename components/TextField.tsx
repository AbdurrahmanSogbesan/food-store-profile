import { StyleSheet } from "react-native";
import React, { ComponentProps, forwardRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { TextInput } from "react-native-paper";

interface TextFieldProps extends ComponentProps<typeof TextInput> {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
}

const TextField = forwardRef<RNTextInput, TextFieldProps>(
  ({ value, onChangeText, label, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        outlineColor="#000"
        activeOutlineColor="#000"
        outlineStyle={styles.outline}
        style={styles.container}
        contentStyle={{ paddingHorizontal: 0 }}
        theme={{
          fonts: {
            regular: {
              fontFamily: "Poppins_300Light",
            },
          },
        }}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    height: 63,
    fontSize: 15,
  },
  outline: {
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default TextField;
