import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { dummyData } from ".";
import { Icon, IconButton, Text } from "react-native-paper";
import icons from "@/constants/icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "@/components/Button";
import FoodCard from "@/components/FoodCard";

const tomatoImage = require("@/assets/images/tomato.png");
const leafImage = require("@/assets/images/leaf.png");
const onionsImage = require("@/assets/images/onions.jpeg");

const Header = ({ data }: { data: any }) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        height: top + 115,
        backgroundColor: "#C3FBAB82",
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 13,
          left: 16,
        }}
      >
        <View
          style={{
            gap: 7,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <IconButton
            icon={icons.caretLeft}
            size={20}
            onPress={() => router.back()}
            containerColor="transparent"
          />
          <Text
            style={{
              fontFamily: "Poppins_300Light",
              fontSize: 24,
              lineHeight: 36,
            }}
            numberOfLines={1}
          >
            {data.name}
          </Text>
          <Icon source={icons.edit} size={18} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            left: 50,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>N67,300</Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <IconButton
              icon={icons.shuffle}
              size={22}
              containerColor="transparent"
              onPress={() => console.log("shuffle")}
            />
            <IconButton
              icon={icons.menu}
              size={21}
              containerColor="transparent"
              onPress={() => console.log("menu")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const cartData = [
  {
    id: 1,
    name: "Tomato - one paint",
    image: tomatoImage,
    price: 6000,
    quantity: 4,
  },
  {
    id: 2,
    name: "Ugwu - small bunch",
    image: leafImage,
    price: 300,
    quantity: 4,
  },
  {
    id: 3,
    name: "Onions - one paint",
    image: onionsImage,
    price: 7000,
    quantity: 2,
  },
];

export default function ShoppingListDetails() {
  const { id } = useLocalSearchParams();
  const data = useMemo(
    () => dummyData.find((item) => item.id === Number(id)),
    [id]
  );

  return (
    <>
      <Header data={data} />

      {/* screen */}
      <View style={styles.container}>
        <FlatList
          data={cartData}
          renderItem={({ item }) => <FoodCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            gap: 20,
            flexGrow: 1,
            paddingBottom: 100,
            paddingHorizontal: 1,
          }}
        />

        <TouchableOpacity
          style={styles.addItemButton}
          activeOpacity={0.7}
          onPress={() => console.log("add item")}
        >
          <Icon source={icons.plus} size={22} />
        </TouchableOpacity>

        <Button
          text="Checkout"
          onPress={() => console.log("checkout")}
          styles={{ marginTop: 14 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 19,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 17,
    justifyContent: "space-between",
  },
  addItemButton: {
    width: 62,
    height: 62,
    borderRadius: 62 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#38B000",
    borderWidth: 1,
    position: "absolute",
    bottom: 84,
    right: 24,
    backgroundColor: "#fff",
  },
});
