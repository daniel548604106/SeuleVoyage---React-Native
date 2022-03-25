import * as React from 'react';
import { Button, ColorSchemeName, Image, Pressable, StyleSheet, View } from 'react-native';

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { EvilIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AccountScreen from '../screens/AccountScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'card' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={({ navigation, route }) => ({
            title: route.params.name,
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <EvilIcons name="chevron-left" size={24} color="black" />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Message"
          component={MessageScreen}
          options={({ navigation }) => ({
            title: 'Your Messages',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <EvilIcons name="chevron-left" size={24} color="black" />
              </Pressable>
            ),
            headerRight: () => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Pressable
                  onPress={() => console.log('search')}
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <EvilIcons name="search" size={24} color="black" />
                </Pressable>
                <Pressable
                  onPress={() => console.log('search')}
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <EvilIcons name="bell" size={24} color="black" />
                </Pressable>
              </View>
            ),
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Message')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Feather
                  name="message-circle"
                  size={24}
                  color="black"
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={TabTwoScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="instagram" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Travel"
        component={TabTwoScreen}
        options={{
          title: 'Travel',
          tabBarIcon: ({ color }) => <TabBarIcon name="plane" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Gallery"
        component={TabTwoScreen}
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="gamepad" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle-o" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  navRow: {
    backgroundColor: 'black',
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultIcon: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
