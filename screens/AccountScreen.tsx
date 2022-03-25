import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../styles/AppStyles';
import { RootTabScreenProps } from '../types';

const AccountScreen = ({ navigation }: RootTabScreenProps<'Account'>) => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          padding: 10,
          backgroundColor: colors.main,
          paddingBottom: 40,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: '#fff' }}>@michaler</Text>
          <Pressable onPress={() => console.log('clicked')}>
            <MaterialCommunityIcons name="menu" size={24} color="white" />
          </Pressable>
        </View>
        <View style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <View style={{ position: 'relative', width: 80, height: 80 }}>
            <Image
              style={{ width: '100%', height: '100%', borderRadius: 20 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
              }}
            />
            <Pressable
              onPress={() => console.log('presed')}
              style={{
                position: 'absolute',
                bottom: 10,
                padding: 2,
                backgroundColor: '#fff',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                right: -5,
              }}
            >
              <Entypo name="plus" size={14} color="black" />
            </Pressable>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
              marginTop: 10,
            }}
          >
            Ramsay Michael Snow
          </Text>
          <Text style={{ color: 'white', fontSize: 12 }}>TravelBlogger</Text>
          <Pressable
            style={{
              width: 200,
              padding: 5,
              backgroundColor: 'white',
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={() => console.log('hihih')}
          >
            <Text style={{ textAlign: 'center', fontSize: 12 }}>
              Edit Profile
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            shadowColor: '#000',
            display: 'flex',
            flexDirection: 'row',
            width: 300,
            marginTop: -30,
            paddingVertical: 10,
            paddingHorizontal: 5,
            justifyContent: 'space-around',
          }}
        >
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}
            >
              971
            </Text>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 12,
                marginTop: 5,
                textAlign: 'center',
              }}
            >
              Likes
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}
            >
              971
            </Text>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 12,
                marginTop: 5,
                textAlign: 'center',
              }}
            >
              Likes
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}
            >
              971
            </Text>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 12,
                marginTop: 5,
                textAlign: 'center',
              }}
            >
              Likes
            </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={{ display: 'flex' }}>
          {Array.from({ length: 20 }).map((_, index) => (
            <Pressable key={index} onPress={() => console.log('hiihi')}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                }}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;
