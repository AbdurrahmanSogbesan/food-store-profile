import {
  Text,
  View,
  Pressable,
  Platform,
  ViewStyle,
  TextStyle,
} from "react-native";

import { router, Stack } from "expo-router";
import { Icon, IconButton } from "react-native-paper";
import icons from "@/constants/icons";

const InnerHeader = ({
  title,
  styles,
}: {
  title: string;
  styles?: ViewStyle;
}) => {
  return (
    <View style={[$innerHeader, styles]}>
      <View style={$innerHeaderContent}>
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
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default function ProfileLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          header() {
            return (
              <View style={$mainHeader}>
                <Text style={$mainHeaderText}>Profile</Text>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          header: () => <InnerHeader title="Edit Details" />,
        }}
      />
      <Stack.Screen
        name="shopping-list"
        options={{
          header: () => <InnerHeader title="Shopping List" />,
        }}
      />
      <Stack.Screen
        name="wallet"
        options={{
          header: () => <InnerHeader title="Wallet" />,
        }}
      />
      <Stack.Screen
        name="address"
        options={{
          header: () => <InnerHeader title="Address" />,
        }}
      />
    </Stack>
  );
}

const $mainHeader: ViewStyle = {
  height: 119,
  backgroundColor: "#C3FBAB82",
};

const $mainHeaderText: TextStyle = {
  fontFamily: "Poppins_300Light",
  fontSize: 32,
  lineHeight: 48,
  position: "absolute",
  bottom: 7,
  left: 33,
};

const $innerHeader: ViewStyle = { height: 98, backgroundColor: "#C3FBAB82" };

const $innerHeaderContent: ViewStyle = {
  position: "absolute",
  bottom: Platform.OS !== "web" ? 7 : 31,
  left: 16,
  gap: 7,
  flexDirection: "row",
  alignItems: "center",
};
