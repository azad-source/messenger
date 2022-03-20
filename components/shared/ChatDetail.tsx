import { mainColor, secondColor } from "@domain/colors";
import { MessageJsModel } from "@domain/jsModels/MessageJsModel";
import { messagesMock } from "@domain/mocks/messagesMock";
import * as React from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import Moment from "moment";

interface Props {
  id: number;
  name: string;
}

export const ChatDetail: React.FC<Props> = ({ id, name }) => {
  const userMessages = messagesMock.filter(
    ({ userId }) => userId === id || userId === 1
  );

  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] =
    React.useState<MessageJsModel[]>(userMessages);

  const sendHandler = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [
        ...prev,
        { text: inputValue, date: new Date(), userId: 1 },
      ]);
      setInputValue("");
    }
  };

  const getDate = (date: Date) => {
    Moment.locale("ru");
    return Moment(date).format("dd MMM HH:MM");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => {
          return (
            <View
              style={[styles.message, item.userId === 1 && styles.ownMessage]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
              <View style={styles.messageInfo}>
                {item.isEdited && (
                  <Text style={styles.messageEdited}>edited</Text>
                )}
                <Text style={styles.messageDate}>{getDate(item.date)}</Text>
              </View>
            </View>
          );
        }}
        style={styles.messages}
      />
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={sendHandler}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    backgroundColor: mainColor,
    color: "#fff",
    width: "100%",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
  },
  messages: {
    width: "100%",
  },
  message: {
    width: "70%",
    elevation: 2,
    backgroundColor: secondColor,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    fontSize: 15,
  },
  ownMessage: {
    marginLeft: "auto",
    borderRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  messageText: {
    color: "rgba(0,0,0, 0.8)",
  },
  messageInfo: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "flex-end",
  },
  messageDate: {
    fontSize: 12,
    color: "rgba(110,110,110, 0.9)",
  },
  messageEdited: {
    fontSize: 12,
    color: "rgba(110,110,110, 0.9)",
    marginRight: 8,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    elevation: 10,
    marginTop: "auto",
  },
});
