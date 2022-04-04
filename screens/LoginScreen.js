import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

//components
import TextInputComponent from "../components /ui/TextInputComponent";
import ButtonComponent from "../components /ui/ButtonComponent";
import TextComponent from "../components /ui/TextComponent";
import LinkComponent from "../components /ui/LinkComponent";
import LogoComponent from "../components /ui/LogoComponent";
import Colors from "../constants/Colors";

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
          <LogoComponent width={70} height={70} />
        </View>

        <View style={styles.title}>
          <TextComponent type={"primary"}>Welcome!</TextComponent>
          <TextComponent type={"secondary"}>Sign in to conintue</TextComponent>
        </View>

        <TextInputComponent
          icon='md-mail'
          placeholder={"Email"}
          onChange={changeHandler}
        />

        <TextInputComponent
          type='password'
          icon='lock-closed'
          placeholder={"Password"}
          onChange={changeHandler}
        />

        <LinkComponent
          style={styles.link}
          title='Forgot password?'
          onPress={() => pressHandler("ForgotPassword")}
          textAlign='right'
        />
        <View style={styles.btn}>
          <ButtonComponent title='Sign In' onPress={pressHandler} />
        </View>

        <View style={styles.signUpText}>
          <Text>Dont you have and account? </Text>
          <LinkComponent
            title='Sign Up'
            onPress={() => pressHandler("SignUp")}
          />
        </View>

        <View style={styles.footerText}>
          <Text>
            By tapping Sing In , you agree to our
            <LinkComponent
              title='Terms'
              onPress={() => pressHandler("SignUp")}
            />
          </Text>


        </View>


      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  btn: {
    marginTop: 60,
    marginBottom: 20,
  },

  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

  signUpText: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },

  footerText: {
    backgroundColor:'blue',
    textAlign: 'center',
  },
});
