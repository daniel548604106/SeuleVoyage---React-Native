import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { useAppDispatch } from '../hooks/useAppRedux';
import { setIsLoggedIn, setUser } from '../redux/slices/globalSlice';
import { colors } from '../styles/AppStyles';

// import axios from "axios";

const AuthScreen = () => {
  const dispatch = useAppDispatch();

  const [authType, setAuthType] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleAuth = async () => {
    setIsLoading(true);
    try {
      const { token, user } = await fetch(
        `http://192.168.1.62:3000/api/auth/${authType}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(loginData),
        }
      ).then((res) => res.json());

      dispatch(setUser(user));
      dispatch(setIsLoggedIn(true));
    } catch (error) {
      console.log(error, 'errorr');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <View>
        <Text style={styles.authTitle}>Welcome</Text>
        {authType === 'login' ? (
          <Text style={styles.authDescription}>Login to Continue!</Text>
        ) : (
          <Text style={styles.authDescription}>Sign Up!</Text>
        )}

        <View style={styles.oAuthWrapper}>
          <View style={styles.oAuthButton}>
            <Text>logo</Text>
          </View>
          <View style={styles.oAuthButton}>
            <Text>logo</Text>
          </View>
          <View style={styles.oAuthButton}>
            <Text>logo</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={loginData.email}
          onChangeText={(e) =>
            setLoginData({
              ...loginData,
              email: e,
            })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          value={loginData.password}
          onChangeText={(e) =>
            setLoginData({
              ...loginData,
              password: e,
            })
          }
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => dispatch(setIsLoggedIn(true))}>
            <Text style={{ fontWeight: 'bold' }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => handleAuth()}
          style={styles.authButton}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            {isLoading
              ? 'loading...'
              : authType === 'login'
              ? 'Login'
              : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.authToggleWrapper}>
        <Text style={{ display: 'flex', flexDirection: 'row' }}>
          I'm a new user ,
          <TouchableOpacity
            onPress={() =>
              setAuthType(authType === 'login' ? 'signup' : 'login')
            }
          >
            <Text style={{ color: colors.main }}>
              {authType === 'login' ? 'Sign Up' : 'Login'}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  authTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  authDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  authButton: {
    borderRadius: 10,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.main,
  },
  oAuthWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  oAuthButton: {
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray,
    borderWidth: 4,
    width: 80,
    height: 80,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    marginBottom: 20,
  },
  authToggleWrapper: {
    position: 'absolute',
    bottom: 20,
    zIndex: 20,
  },
});
