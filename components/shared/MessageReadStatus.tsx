import { mainColor } from "@domain/colors";
import { MessageJsModel } from "@domain/jsModels/MessageJsModel";
import * as React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  message: MessageJsModel;
}

export const MessageReadStatus: React.FC<Props> = ({ message }) => {
  const { isViewed, isRead } = message;

  return (
    <View style={styles.root}>
      {isViewed && (
        <View style={styles.isViewed}>
          {isRead && <View style={styles.isRead}></View>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 18,
    height: 18,
    marginRight: 8,
    borderRadius: 15,
    padding: 2,
    backgroundColor: mainColor,
  },
  isViewed: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    padding: 2,
    backgroundColor: '#fff',
  },
  isRead: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    backgroundColor: mainColor,
  },
});
