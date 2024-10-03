import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon, IconButton, Text } from "react-native-paper";
import icons from "@/constants/icons";

export default function AddressCard({
  item,
  onDefaultChange,
  onEditPress,
}: {
  item: any;
  onDefaultChange: (id: number) => void;
  onEditPress: (id: number) => void;
}) {
  return (
    <View style={styles.container}>
      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 16 }}>{item.location}</Text>
        <Text
          style={[
            styles.smallText,
            {
              color: "#5F5F5F",
            },
          ]}
        >
          {item.street}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TouchableOpacity onPress={() => onDefaultChange(item.id)}>
            <Icon
              source={item.isDefault ? icons.info : icons.circle}
              size={11}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.smallText,
              {
                color: item.isDefault ? "#38B000" : "#4B4B4B",
              },
            ]}
          >
            {item.isDefault ? "Default Address" : "Set as Default"}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => onEditPress(item.id)}>
        <Icon source={icons.edit} size={18} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderColor: "#121212",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallText: {
    fontSize: 10,
    fontFamily: "Poppins_300Light",
  },
});
