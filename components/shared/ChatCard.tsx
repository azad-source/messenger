import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";

interface Props {
  image?: ImageSourcePropType;
  name: string;
}

export const ChatCard: React.FC<Props> = ({ image, name }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageWrapper}>
        {!!image && (
          <Image source={image} style={styles.image} resizeMode={"cover"} />
        )}
      </View>
      <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
        {name}
      </Text>
    </View>
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
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginLeft: 15,
    fontSize: 16,
  },
});
