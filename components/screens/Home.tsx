import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParam } from "App";
import { ChatCard } from "@components/shared/ChatCard";
import { usersMock } from "@domain/mocks/usersMock";

type HomeParams = NativeStackScreenProps<RootStackParam, "Home">;

export const Home: React.FC<HomeParams> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={usersMock}
        renderItem={({ item }) => (
          <ChatCard image={item.avatar} name={item.name} />
        )}
      />

      {/* <Button
        title="Go To Detail Screen"
        onPress={() =>
          navigation.navigate("Chats", {
            id: 1,
            someField: "Details Data",
          })
        }
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    padding: 10,
  },
});
