import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { colors } from '../styles/AppStyles';
import { RootTabScreenProps } from '../types';

const Message = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 100, marginRight: 10 }}
          source={{
            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          }}
        />
        <View>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Michael Snow</Text>
          <Text>Michael Snow</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 12 }}>22:23</Text>
        <Text
          style={{
            backgroundColor: colors.main,
            color: '#fff',
            textAlign: 'center',
            marginTop: 5,
            fontSize: 12,
            padding: 5,
            borderRadius: 10,
          }}
        >
          12
        </Text>
      </View>
    </View>
  );
};

const MessageScreen = ({ navigation }: RootTabScreenProps<'Account'>) => {
  return (
    <View>
      <ScrollView>
        {Array.from({ length: 20 }).map((_, index) => (
          <Message key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MessageScreen;
