import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

//components
import TextInputComponent from "../components /ui/TextInputComponent";
import ButtonComponent from "../components /ui/ButtonComponent";
import TextComponent from "../components /ui/TextComponent";
import LinkComponent from "../components /ui/LinkComponent";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TextComponent title={"Welcome"} style={"styles.secondary"} />
      
      <TextComponent title={"Sign in to continue"} />

      <TextInputComponent placeholder={"Email"} onChange={() => {}} />

      <TextInputComponent placeholder={"Password"} onChange={() => {}} />

      <LinkComponent
        title='Forgot password?'
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      />

      <ButtonComponent title='Login' onPress={() => {}} />


      <LinkComponent
        title='Sign up'
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 60,
    margin: 20,
    borderWidth: 0,
    padding: 10,
    borderRadius: 7,
    width: "80%",
    backgroundColor: "#e2ebf0",
  },
});
