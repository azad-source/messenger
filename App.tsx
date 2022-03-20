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
import { Chats } from "./components/screens/Chats";

export type RootStackParam = {
  Home: undefined;
  Chats: { id: number; someField: string };
};

export default function App() {
  const Stack = createNativeStackNavigator();
  React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

  const screenOptions: NativeStackNavigationOptions = {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#08c" },
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
          name="Chats"
          component={Chats}
          options={{ title: "Chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
