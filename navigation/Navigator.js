import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//components
import Login from "../screens/Login";
import Forgot from "../screens/Forgot";
import SignUp from "../screens/SignUp";
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
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ForgotPassword' component={Forgot} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
