import React from "react";
import { Text, View } from "react-native";
import { RootTabScreenProps } from "../types";

const MessageScreen = ({ navigation }: RootTabScreenProps<"Account">) => {
  return (
    <View>
      <Text>MessagesScreen</Text>
    </View>
  );
};

export default MessageScreen;
