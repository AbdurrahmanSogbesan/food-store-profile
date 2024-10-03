import {
  Text,
  View,
  Pressable,
  Platform,
  ViewStyle,
  TextStyle,
} from "react-native";

import { router, Stack } from "expo-router";
import { Icon } from "react-native-paper";
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
        <Pressable onPress={() => router.navigate("/(tabs)/profile/")}>
          <Icon source={icons.arrowLeft} size={20} />
        </Pressable>
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
  bottom: Platform.OS === "ios" ? 7 : 31,
  left: 16,
  gap: 7,
  flexDirection: "row",
  alignItems: "center",
};
