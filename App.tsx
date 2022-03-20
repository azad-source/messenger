import * as React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Home } from "./components/screens/Home";
import { Chat } from "./components/screens/Chat";
import { mainColor } from "@domain/colors";

export type RootStackParam = {
  Home: undefined;
  Chat: { id: number; userName: string };
};

export default function App() {
  const Stack = createNativeStackNavigator();
  React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

  const screenOptions: NativeStackNavigationOptions = {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: mainColor },
    headerTintColor: "#fff",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Telegram" }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: "Chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
