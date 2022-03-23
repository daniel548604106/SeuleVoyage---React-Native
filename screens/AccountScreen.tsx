import React from "react";
import { Text, View } from "react-native";
import { RootTabScreenProps } from "../types";

const AccountScreen = ({ navigation }: RootTabScreenProps<"Account">) => {
  return (
    <View>
      <Text>Accounast</Text>
    </View>
  );
};

export default AccountScreen;
