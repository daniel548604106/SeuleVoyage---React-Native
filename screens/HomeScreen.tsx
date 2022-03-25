import React from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Post from "../components/Home/Post";
import { useAppDispatch } from "../hooks/useAppRedux";
import { setIsLoggedIn, setUser } from "../redux/slices/globalSlice";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setIsLoggedIn(false));
  };

  return (
    <SafeAreaView>
      <ScrollView horizontal>
        <View style={styles.storyContainer}>
          {Array.from({ length: 8 }).map(() => (
            <View style={styles.storyWrapper}>
              <Image
                style={styles.storyImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1647985070722-3532322755fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
                }}
              />
              <Text style={styles.storyDescription}>Add Story</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <ScrollView style={{ padding: 10 }}>
        {Array.from({ length: 10 }).map(() => (
          <View style={{ marginBottom: 20 }}>
            <Post />
          </View>
        ))}
      </ScrollView>
      <Button title="Logout" onPress={() => handleLogout()} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  storyContainer: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  storyWrapper: {
    marginRight: 10,
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  storyDescription: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 12,
  },
});
