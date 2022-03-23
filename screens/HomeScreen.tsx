import React from "react";
import { Button, Text, View } from "react-native";
import { useAppDispatch } from "../hooks/useAppRedux";
import { setIsLoggedIn } from "../redux/slices/globalSlice";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Modal</Text>
      <Button title="Logout" onPress={() => dispatch(setIsLoggedIn(false))} />
    </View>
  );
};

export default HomeScreen;
