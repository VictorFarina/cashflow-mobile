import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { Link } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";

//components
import TextInputComponent from "../components /ui/TextInputComponent";
import ButtonComponent from "../components /ui/ButtonComponent";
import TextComponent from "../components /ui/TextComponent";
import LogoComponent from "../components /ui/LogoComponent";

import Colors from "../constants/Colors";
import logo from "../assets/images/logo.png";


const Login = ({ navigation }) => {
 const window = useWindowDimensions();

  //userinfo----------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //------------------

  //handlers---------
  const emailChangeHandler = (value) => {
    setEmail(value);
  };

  const emailBlurHandler = () => {
    setValidations((prevState) => {
      return {
        ...prevState,
        emailIsPressed: true,
      };
    });
  };

  const passwordBlurHandler = () => {
    setValidations((prevState) => {
      return {
        ...prevState,
        passwordIsPressed: true,
      };
    });
  };

  const passwordHandler = (value) => {
    setPassword(value);
  };
  //------------------

  //Validation-----------
  const [validations, setValidations] = useState({
    isEmailValid: false,
    emailIsPressed: false,
    isPasswordValid: false,
    passwordIsPressed: false,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setValidations((prevState) => {
        return {
          ...prevState,
          emailIsValid: email.trim().length > 6 && email.trim().includes("@"),
          passwordIsValid: password.trim().length > 0,
        };
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [email, password]);

  let showEmailErrorMessage =
    !validations.emailIsValid && validations.emailIsPressed;
  let showPasswordErrorMessage =
    !validations.passwordIsValid && validations.passwordIsPressed;
  //--------------------------------------------------------------

  return (
    <Pressable style={styles.screen} onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <View style={{...styles.logoContainer, marginTop: window.height < 800 ? 0  : 70,}}>
          <LogoComponent width={70} height={70} logo={logo} />
        </View>

        <View style={{...styles.titleContainer, marginBottom: window.height < 800 ? 0 : 30  }}>
          <TextComponent
            color={Colors.black}
            title='Welcome'
            fontWeight={"300"}
            fontSize={35}
          />
          <TextComponent
            color={Colors.grey}
            title='Sign In to Continue'
            fontWeight={"300"}
            fontSize={16}
          />
        </View>

        <TextInputComponent
          type='e-mail'
          icon='md-mail'
          iconColor={Colors.inputIconColor}
          placeholder={"Email"}
          onChangeText={emailChangeHandler}
          onBlur={emailBlurHandler}
          backgroundColor={Colors.inputGrey}
          value={email}
          error={showEmailErrorMessage}
          errorMessage='The email is invalid'
        />

        <TextInputComponent
          type='password'
          icon='lock-closed'
          iconColor={Colors.inputIconColor}
          placeholder={"Password"}
          onChangeText={passwordHandler}
          backgroundColor={Colors.inputGrey}
          onBlur={passwordBlurHandler}
          autoCapitalize='none'
          autoCorrect={false}
          value={password}
          error={showPasswordErrorMessage}
          errorMessage="The field can't be empty"
        />

        <Link style={styles.link} to={{ screen: "ForgotPassword" }}>
          Forgot password?
        </Link>

        <View style={{...styles.btnContainer,marginTop:window.height < 800? 50 : 80}}>
          <ButtonComponent
            width={"100%"}
            backgroundColor={Colors.buttonBlue}
            title='Sign In'
            fontSize={20}
            color='#fff'
            type='submit'
          />
        </View>

        <View style={{...styles.signUpTextContainer,marginBottom: window.height < 800 ? 20 : 40}}>
          <Text>Don't you have and account?</Text>
          <Link style={styles.link} to={{ screen: "SignUp" }}>
            Sign Up
          </Link>
        </View>

        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>
            By tapping Sing In,you agree to our{" "}
            <Link style={styles.link} to={{ screen: "" }}>
              Terms
            </Link>{" "}
            and have read and acknowledge our{" "}
            <Link style={styles.link} to={{ screen: "" }}>
              Privacy Policy
            </Link>
          </Text>
        </View>
      </View>
    </Pressable>
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

  container: {
    width: Platform.isPad ? "40%" : "80%",
  },

  logoContainer: {
    width: "100%",
    marginBottom: 30,
  },

  titleContainer: {
    width: "100%",

  },

  link: {
    color: Colors.linkBLue,
    textAlign: "right",
    marginHorizontal: 5,
  },

  btnContainer: {
    
    marginBottom: 20,
  },

  signUpTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    
  },
  footerTextContainer: {
    alignSelf: "center",
    justifyContent: "center",
    width: Platform.isPad ? "75%" : "95%",
  },
  footerText: {
    textAlign: "center",
    color: Colors.grey,
  },
});
