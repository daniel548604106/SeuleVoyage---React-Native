import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch } from "../hooks/useAppRedux";
import { setIsLoggedIn } from "../redux/slices/globalSlice";
import { colors } from "../styles/AppStyles";

import { SvgUri } from "react-native-svg";
const AccountScreen = () => {
  const [authType, setAuthType] = useState("login");
  const dispatch = useAppDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View>
        <Text style={styles.authTitle}>Welcome</Text>
        {authType === "login" ? (
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => dispatch(setIsLoggedIn(true))}>
            <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(setIsLoggedIn(true))}
          style={styles.authButton}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {authType === "login" ? "Login" : "Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.authToggleWrapper}>
        <Text style={{ display: "flex", flexDirection: "row" }}>
          I'm a new user ,
          <TouchableOpacity
            onPress={() =>
              setAuthType(authType === "login" ? "signup" : "login")
            }
          >
            <Text style={{ color: colors.main }}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  authTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  authDescription: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  authButton: {
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: colors.main,
  },
  oAuthWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  oAuthButton: {
    borderRadius: 20,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    position: "absolute",
    bottom: 20,
    zIndex: 20,
  },
});
