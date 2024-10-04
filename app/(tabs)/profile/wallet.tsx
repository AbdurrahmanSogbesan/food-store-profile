import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, IconButton, Text } from "react-native-paper";
import icons from "@/constants/icons";

export default function Wallet() {
  return (
    <ScrollView
      style={{ backgroundColor: "#fff", flex: 1 }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.overviewContainer}>
        <View style={styles.walletCard}>
          <View>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.walletBalance}>
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(20000)}
              </Text>
              <Text style={styles.walletBalanceCurrency}>NGN</Text>
            </View>
            <Text style={styles.walletSubtitle}>Available Balance</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => console.log("Add money")}
            style={{ marginBottom: 3 }}
          >
            <Icon source={icons.outlineAdd} size={32} />
          </TouchableOpacity>
          <Text style={{ fontSize: 10 }}>Add Money</Text>
        </View>
      </View>

      <View style={styles.transactions}>
        <Text style={{ fontSize: 16 }}>Transactions</Text>
        <IconButton
          icon={icons.arrowRight}
          size={17.5}
          onPress={() => console.log("View Transactions")}
        />
      </View>

      <Text style={styles.cardsHeader}>Cards</Text>

      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 9 }}>
          <Icon source={icons.mastercard} size={16} />
          <Text style={{ fontFamily: "Poppins_500Medium", color: "#868686" }}>
            5399 8344 **** ****
          </Text>
        </View>
        <IconButton icon={icons.bin} size={16} iconColor="#FF0000" />
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <TouchableOpacity onPress={() => console.log("Add New Card")}>
          <Icon source={icons.outlineAdd} size={18} />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Poppins_300Light" }}>Add New Card</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 14,
  },
  overviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
    marginBottom: 34,
  },
  walletCard: {
    backgroundColor: "#111111",
    paddingVertical: 25,
    paddingLeft: 21,
    paddingRight: 37,
    borderRadius: 5,
    flex: 1,
  },
  walletBalance: {
    fontSize: 29,
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    lineHeight: 35,
  },
  walletBalanceCurrency: {
    fontSize: 9.5,
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    lineHeight: 11.4,
  },
  walletSubtitle: { color: "#fff", fontSize: 14.5, lineHeight: 17.5 },
  transactions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 3,
    paddingBottom: 5.4,
    borderBottomWidth: 1,
    borderBottomColor: "#C0C0C0",
    marginBottom: 17,
  },
  cardsHeader: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    marginBottom: 5,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
  },
});
