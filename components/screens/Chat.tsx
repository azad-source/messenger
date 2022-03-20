import * as React from "react";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParam } from "App";
import { ChatDetail } from "@components/shared/ChatDetail";
import { useNavigation } from "@react-navigation/native";
import { textEllipsis } from "@domain/utils/stringHelper";

type Params = NativeStackScreenProps<RootStackParam, "Chat">;

export const Chat: React.FC<Params> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const id = route?.params.id;
  const userName = route?.params.userName;
  navigation.setOptions({ title: textEllipsis(userName) });

  return <ChatDetail id={id} name={userName} />;
};
