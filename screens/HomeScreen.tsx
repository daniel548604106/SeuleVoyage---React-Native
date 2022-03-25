import React from 'react';
import {
    Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View
} from 'react-native';

import Post from '../components/Home/Post';
import { useAppDispatch } from '../hooks/useAppRedux';
import { setIsLoggedIn, setUser } from '../redux/slices/globalSlice';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setIsLoggedIn(false));
  };

  return (
    <SafeAreaView>
      <View style={styles.storyContainer}>
        <FlatList
          horizontal
          keyExtractor={(item, index) => `${index}`}
          data={Array.from({ length: 20 }).map(() => ({
            text: 'Add Story',
            image:
              'https://images.unsplash.com/photo-1647985070722-3532322755fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
          }))}
          renderItem={({ item }) => (
            <View style={styles.storyWrapper}>
              <Image
                style={styles.storyImage}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={styles.storyDescription}>{item.text}</Text>
            </View>
          )}
        />
      </View>
      <ScrollView style={{ padding: 10 }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Post isLiked={true} />
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
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  storyWrapper: {
    marginRight: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  storyDescription: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
  },
});
