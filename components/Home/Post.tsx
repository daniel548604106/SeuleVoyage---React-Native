import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

import { colors } from '../../styles/AppStyles';
import { Text, View } from '../Themed';

interface PostProps {
  isLiked: boolean;
}

export default function Post(props: PostProps) {
  const { isLiked } = props;

  const [isPostLiked, setIsPostLiked] = useState(isLiked);
  function handleHelpPress() {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
    );
  }
  return (
    <View style={styles.postContainer}>
      <View style={styles.userInfoContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={styles.userImage}
            source={{
              width: 40,
              height: 40,
              uri: 'https://images.unsplash.com/photo-1558361716-1277b93e9c11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            }}
          />
          <Text style={styles.userName}>Sansa Indira</Text>
        </View>
        <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
      </View>
      <View
        style={{ height: 2, backgroundColor: colors.gray, marginVertical: 10 }}
      ></View>
      <View>
        <TouchableOpacity onPress={handleHelpPress}>
          <Text>
            My last day for this year holiday! So excited to share my memories
            with you guys! 😁😍
          </Text>
          <Image
            style={styles.postImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1607118150750-5ca69d279ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => setIsPostLiked((prev) => !prev)}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 20,
                }}
              >
                <FontAwesome
                  size={20}
                  style={{
                    marginBottom: -3,
                    marginRight: 10,
                    color: colors.main,
                  }}
                  name={isPostLiked ? 'heart' : 'heart-o'}
                />
                <Text>1890</Text>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Feather
                style={{ marginRight: 10 }}
                name="message-circle"
                size={20}
                color="black"
              />
              <Text>1890</Text>
            </View>
          </View>
          <Text>2 Hours ago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: 10,
    padding: 15,
  },
  userInfoContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImage: {
    borderRadius: 100,
    marginRight: 10,
  },
  postImage: { width: '100%', height: 200, borderRadius: 20, marginTop: 10 },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
  },
});
