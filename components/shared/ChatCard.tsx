import { textEllipsis } from "@domain/utils/stringHelper";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableHighlight,
  GestureResponderEvent,
} from "react-native";

interface Props {
  image?: ImageSourcePropType;
  name: string;
  onClick: (event: GestureResponderEvent) => void;
}

export const ChatCard: React.FC<Props> = ({ image, name, onClick }) => {
  const nameArr = name.split(" ");

  const nameInitials =
    nameArr.length > 1
      ? nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase()
      : nameArr[0][0].toUpperCase();

  return (
    <TouchableHighlight onPress={onClick} underlayColor="#fff">
      <View style={styles.root}>
        <View style={styles.imageWrapper}>
          {!!image ? (
            <Image source={image} style={styles.image} resizeMode={"cover"} />
          ) : (
            <Text style={styles.nameInitials}>{nameInitials}</Text>
          )}
        </View>
        <Text style={styles.name}>{textEllipsis(name, 30)}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 5,
    elevation: 5,
    width: "100%",
    borderRadius: 4,
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginLeft: 15,
    fontSize: 16,
  },
  nameInitials: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
