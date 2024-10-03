import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
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
        fontSize: "normal",
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
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
