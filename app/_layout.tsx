import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // load fonts
  const [loaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const _fontConfig = {
    ...MD2LightTheme.fonts,
    default: {
      regular: {
        fontFamily: "Poppins_400Regular",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "Poppins_600SemiBold",
        fontWeight: "normal",
      },
      light: {
        fontFamily: "Poppins_300Light",
        fontWeight: "normal",
      },
      thin: {
        fontFamily: "Poppins_300Light",
        fontWeight: "normal",
      },
    },
  } as const;

  const fontConfig = {
    ios: _fontConfig.default,
    android: _fontConfig.default,
    web: _fontConfig.default,
  } as const;

  const theme = {
    ...MD2LightTheme,
    fonts: configureFonts({
      config: fontConfig,
      isV3: false,
    }),
  };

  return (
    <GestureHandlerRootView>
      <PaperProvider theme={theme}>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
          </Stack>
          <StatusBar style="dark" />
        </BottomSheetModalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
