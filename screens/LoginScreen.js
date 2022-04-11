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

//components--------------------------------
import TextInputComponent from "../components/ui/TextInputComponent";
import ButtonComponent from "../components/ui/ButtonComponent";
import TextComponent from "../components/ui/TextComponent";
import LogoComponent from "../components/ui/LogoComponent";
//-----------------------------------------

import Colors from "../constants/Colors";
import logo from "../assets/images/logo.png";

const Login = ({ navigation }) => {
  const displaySmall = useWindowDimensions().height < 777 ;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //-----------------------------------------

  //handlers---------------------------------
  const emailChangeHandler = (value) => {
    setEmail(value);
  };
    //-----------------------------------------

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

        <View style={{...styles.logoContainer, marginTop:displaySmall ? 20 : 70,}}>
          <LogoComponent width={displaySmall ? 50 : 70} height={displaySmall ? 50 : 70} logo={logo} />
        </View>

        <View style={{...styles.titleContainer, marginBottom:displaySmall ? 0 : 30  }}>
          <TextComponent
            color={Colors.black}
            title='Welcome'
            fontWeight={"300"}
            fontSize={displaySmall ? 25 : 35}
          />
          <TextComponent
            color={Colors.grey}
            title='Sign In to Continue'
            fontWeight={"300"}
            fontSize={displaySmall ? 12 : 16}
          />
        </View>

        <TextInputComponent
          height={displaySmall ? 50 : 60}
          type='e-mail'
          icon='md-mail'
          iconSize={displaySmall ? 20 : 30}
          iconColor={Colors.inputIconColor}
          placeholder={"Email"}
          onChangeText={emailChangeHandler}
          onBlur={emailBlurHandler}
          backgroundColor={Colors.inputGrey}
          value={email}
          error={showEmailErrorMessage}
          errorMessage='The email is invalid'
          marginVertical={displaySmall ? 10 : 20}
          borderColor={'transparent'}
        />

        <TextInputComponent
          type='password'
          icon='lock-closed'
          iconSize={displaySmall ? 20 : 30}
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
          marginVertical={displaySmall ? 20 : 20}
          borderColor={'transparent'}
        />

        <Link style={styles.link} to={{ screen: "ForgotPassword" }}>
          Forgot password?
        </Link>

        <View style={{...styles.btnContainer,marginTop:displaySmall ? 30 : 80}}>
          <ButtonComponent
            width={"100%"}
            padding={displaySmall ? 10 : 20}
            backgroundColor={Colors.buttonBlue}
            title='Sign In'
            fontSize={displaySmall ? 16 : 20}
            color='#fff'
            type='submit'
          />
        </View>

        <View style={{...styles.signUpTextContainer,marginBottom:displaySmall ? 20 : 40}}>
          <Text>Don't you have and account?</Text>
          <Link style={styles.link} to={{ screen: "SignUp" }}>
            Sign Up
          </Link>
        </View>

        <View style={styles.footerTextContainer}>
          <Text style={{...styles.footerText, fontSize:displaySmall ? 10 : 14}}>
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
