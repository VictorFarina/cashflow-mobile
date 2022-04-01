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

      <View style={styles.logo}>
              <LogoComponent width={100} height={100} />
      </View>
      

        <TextComponent title={"Welcome"} />

        <TextComponent title={"Sign in to continue"} />
   

      <TextInputComponent
        placeholder={"Email"}
        onChange={() => changeHandler}
      />

      <TextInputComponent
        placeholder={"Password"}
        onChange={() => changeHandler}
      />

      <LinkComponent
        title='Forgot password?'
        onPress={() => pressHandler("ForgotPassword")}
      />

      <ButtonComponent title='Login' onPress={() => {}} />

      <LinkComponent title='Sign up' onPress={() => pressHandler("SignUp")} />

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width:'100%',
    marginLeft:30
   
  },

});
