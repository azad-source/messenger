import * as React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParam } from "App";

type ChatsParams = NativeStackScreenProps<RootStackParam, "Chats">;

export const Chats: React.FC<ChatsParams> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const id = route?.params.id;
  const someField = route?.params.someField;

  return (
    <View style={styles.container}>
      <Text>Chats Screen</Text>
      <Text>ID: {id}</Text>
      <Text>Some Field: {someField}</Text>
      <Button
        title="Go To Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
