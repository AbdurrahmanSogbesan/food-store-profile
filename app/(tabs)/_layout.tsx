import icons from "@/constants/icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { router, Tabs, useRouter } from "expo-router";
import { ImageSourcePropType, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
      <Icon source={icon} size={30} color={color} />
      <Text
        style={{
          fontFamily: focused ? "Poppins_600SemiBold" : "Poppins_400Regular",
          fontSize: 10,
          color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <Tabs
        screenOptions={({ route }) => {
          console.log("route.path", route);
          return {
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#38B000",
            tabBarInactiveTintColor: "#909090",
            tabBarStyle: {
              backgroundColor: "#fff",
              borderTopWidth: 0.5,
              borderTopColor: "#909090",
              height: bottom + 61,
              paddingVertical: 8,
            },
            headerStyle: {
              backgroundColor: "#C3FBAB82",
              height: 119,
            },
            headerTitleAlign: "left",

            headerTitleStyle: {
              fontFamily: "Poppins_300Light",
              fontSize: 32,
              lineHeight: 48,
              paddingLeft: 12,
            },
          };
        }}
        initialRouteName="home"
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.categories}
                color={color}
                name="Categories"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.orders}
                color={color}
                name="Orders"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
