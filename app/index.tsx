import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function Index() {
  const [text, setText] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
