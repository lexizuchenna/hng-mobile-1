import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
  Roboto_800ExtraBold,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

import * as Screens from "@/screens";

import { MainContext } from "@/providers";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = Font.useFonts({
    regular: Roboto_400Regular,
    medium: Roboto_500Medium,
    "semi-bold": Roboto_600SemiBold,
    bold: Roboto_700Bold,
    "extra-bold": Roboto_800ExtraBold,
  });

  const prepareApp = useCallback(async () => {
    try {
      if (!fontsLoaded) return;

      await SplashScreen.hideAsync();
    } catch (err) {
      console.error("App init failed: ", err);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    prepareApp();
  }, [prepareApp]);

  return (
    <MainContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Screens.Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="test"
            component={Screens.Test}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="result"
            component={Screens.Result}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContext>
  );
}
