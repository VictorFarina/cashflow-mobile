import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

//components
import TextInputComponent from "../components /ui/TextInputComponent";
import ButtonComponent from "../components /ui/ButtonComponent";
import TextComponent from "../components /ui/TextComponent";
import LinkComponent from "../components /ui/LinkComponent";
import LogoComponent from "../components /ui/LogoComponent";

const Login = ({ navigation }) => {
  //handlers
  const pressHandler = (route) => {
    navigation.navigate(route);
  };

  const changeHandler = (input) => {
    console.log(input);
  };

  return (
    <View style={styles.screen}>

      <View style={styles.container}>

        <View style={styles.logo}>
          <LogoComponent width={80} height={80} />
        </View>

        <View style={styles.title}>
          <TextComponent type={"primary"}> Welcome </TextComponent>
          <TextComponent type={"secondary"}>Sign in to conintue!</TextComponent>
        </View>

        <TextInputComponent icon='mail-outline' placeholder={"Email"} onChange={changeHandler} />

        <TextInputComponent icon='lock-closed-outline' placeholder={"Password"} onChange={changeHandler} />

        <LinkComponent
          title='Forgot password?'
          onPress={() => pressHandler("ForgotPassword")}
        />

        <ButtonComponent title='Sign In' onPress={pressHandler} />

        <LinkComponent title='Sign up' onPress={() => pressHandler("SignUp")} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  container: {
    marginHorizontal: 20,
  },

  logo: {
    width: "100%",
    marginTop: 100,
    marginBottom: 30,
  },

  title: {
    width: "100%",
    marginBottom: 30,
  },
});
