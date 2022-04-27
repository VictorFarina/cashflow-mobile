import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//components
import LoginScreen from "../screens/LoginScreen";
import ForgotScreen from "../screens/ForgotScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DashboardScreen from "../screens/DashboardScreen";
import LogoComponent from "../components/ui/LogoComponent";
import logo from "../assets/images/../images/cashflow-logo-text.png";
//constants
import Colors from "../constants/Colors";
const Stack = createStackNavigator();

const InitialStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "",
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{
          headerTitle: () => (
            <LogoComponent logo={logo} width={150} height={25} />
          ),
        }}
      />
      <Stack.Screen name='ForgotPassword' component={ForgotScreen} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: "",
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
    <Stack.Screen
      name='DashboardScreen'
      component={DashboardScreen}
      options={{
        headerTitle: () => (
          <LogoComponent logo={logo} width={150} height={25} />
        ),
      }}
    />
  </Stack.Navigator>
  )
};

const Navigator = () => {
  const userToken = useSelector((state) => state.userReducer.authToken);
  console.log(userToken);
  return (
  <NavigationContainer>
  {userToken  === null ? <InitialStack/>  :  <AuthStack/> }
  </NavigationContainer>
  )
};

export default Navigator;
