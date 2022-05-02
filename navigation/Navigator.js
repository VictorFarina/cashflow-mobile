import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//components
import LoginScreen from "../screens/LoginScreen";
import ForgotScreen from "../screens/ForgotScreen";
import SignUpScreen from "../screens/SignUpScreen";

import InvoicesScreen from "../screens/InvoicesScreen";
import InvoiceDetailsScreen from "../screens/InvoiceDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import LoadingComponent from "../components/ui/LoadingComponent";

import LogoComponent from "../components/ui/LogoComponent";
import logo from "../assets/images/../images/cashflow-logo-text.png";

const Stack = createStackNavigator();

const LoadingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoadingComponent'
        component={LoadingComponent}
        options={{ headerShown: false, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};

const InitialStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: " ",
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: "",
      }}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
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
        headerTitle: () => (
          <LogoComponent logo={logo} width={150} height={25} />
        ),
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />

      <Stack.Screen
        name='InvoicesScreen'
        component={InvoicesScreen}
        options={{
          headerTitle: () => (
            <LogoComponent logo={logo} width={150} height={25} />
          ),
        }}
      />
      <Stack.Screen
        name='InvoiceDetailsScreen'
        component={InvoiceDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const userToken = useSelector((state) => state.userReducer.userToken);
  const isLoading = useSelector((state) => state.userReducer.loading);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingStack />
      ) : userToken === null ? (
        <InitialStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
