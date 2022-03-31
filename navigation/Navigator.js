import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//components
import LoginScreen from "../screens/LoginScreen";
import ForgotScreen from "../screens/ForgotScreen";
import SignUpScreen from "../screens/SignUpScreen";
//constants
import Colors from "../constants/Colors";       

const Stack = createStackNavigator();   

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.CashFlowBlue,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='ForgotPassword' component={ForgotScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
