import { Stack } from "expo-router";
import { InnerHeader } from "../_layout";

export default function ShoppingListLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{ header: () => <InnerHeader title="Shopping List" /> }}
      />
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
