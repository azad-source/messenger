import * as React from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParam } from "App";
import { ChatCard } from "@components/shared/ChatCard";
import { usersMock } from "@domain/mocks/usersMock";
import { mainColor } from "@domain/colors";

type Params = NativeStackScreenProps<RootStackParam, "Home">;

export const Home: React.FC<Params> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={mainColor} />
      <FlatList
        data={usersMock}
        renderItem={({ item }) => (
          <ChatCard
            image={item.avatar}
            name={item.name}
            onClick={() =>
              navigation.navigate("Chat", {
                id: item.id,
                userName: item.name,
              })
            }
          />
        )}
      />
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
