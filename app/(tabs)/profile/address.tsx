import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import AddressCard from "@/components/AddressCard";

export default function Address() {
  const [dummyAddresses, setDummyAddresses] = useState([
    {
      id: 1,
      location: "Fadeyi, Lagos Nigeria",
      street: "13, Ayonuga",
      isDefault: true,
    },
    {
      id: 2,
      location: "Work",
      street: "456 Work St, Anytown, USA",
      isDefault: false,
    },
  ]);

  const handleDefaultChange = (id: number) => {
    setDummyAddresses((prev) =>
      prev.map((address) =>
        address.id === id
          ? { ...address, isDefault: true }
          : { ...address, isDefault: false }
      )
    );
  };

  const handleEditPress = (id: number) => {
    console.log("Edit Pressed", id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyAddresses}
        renderItem={({ item }) => (
          <AddressCard
            item={item}
            onDefaultChange={handleDefaultChange}
            onEditPress={handleEditPress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 14, flexGrow: 1 }}
      />

      <Button
        text="Add New Address"
        onPress={() => console.log("Add New Address")}
        styles={{ marginTop: 14 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingHorizontal: 20,
    paddingBottom: 47,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
  },
});
