import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import LogoComponent from "../components/ui/LogoComponent";
import logo from "../assets/images/cashflow-logo-text.png";
import { useWindowDimensions } from "react-native";
import TextInputComponent from "../components/ui/TextInputComponent";
import TextComponent from "../components/ui/TextComponent";
import ButtonComponent from "../components/ui/ButtonComponent";

import Colors from "../constants/Colors";

const Forgot = (props) => {
  //responsiveness
  const displaySmall = useWindowDimensions().height < 800;
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState(false);
  //handlers---------------------------------
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

  //Validation------------------------------------
  const [validations, setValidations] = useState({
    isEmailValid: false,
    emailIsPressed: false,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setValidations((prevState) => {
        return {
          ...prevState,
          emailIsValid: email.trim().length > 6 && email.trim().includes("@"),
        };
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [email]);

  let showEmailErrorMessage =
    !validations.emailIsValid && validations.emailIsPressed;

    const pressHandler = () => {
      setEmailSent((prevState)=> !prevState)
      
    }

  //------------------------------------------

  


  return (
    <View style={styles.screen}>
      <LogoComponent width={236} height={40} logo={logo} />

      <View style={styles.container}>
        <TextComponent
          color={Colors.black}
          title={!emailSent ? "¿Olvidaste tu contraseña?" : "Verificar cuenta "}
          fontWeight={"500"}
          fontSize={displaySmall ? 12 : 18}
          marginVertical={20}
        />
        <TextComponent
          color={Colors.black}
          title={
            !emailSent
              ? "No te preocupes, comienza el proceso de recuperación llenando este campo."
              : "Por favor escribe los 4 números que hemos enviado a su correo."
          }
          fontWeight={"300"}
          fontSize={displaySmall ? 10 : 14}
          marginVertical={10}
        />

        <TextInputComponent
          height={displaySmall ? 50 : 60}
          type={!emailSent ? "e-mail" : ""}
          icon={!emailSent ? "md-mail" : ""}
          iconSize={displaySmall ? 20 : 30}
          iconColor={Colors.inputIconColor}
          placeholder={!emailSent ? "Email" : 'Confirmtion code'}
          onChangeText={emailChangeHandler}
          onBlur={emailBlurHandler}
          backgroundColor={Colors.inputGrey}
          value={!emailSent ? email : verificationCode}
          error={showEmailErrorMessage}
          errorMessage='The email is invalid'
          marginVertical={displaySmall ? 10 : 20}
          borderColor={"transparent"}
        />

        <ButtonComponent
          width={"100%"}
          padding={15}
          backgroundColor={Colors.buttonBlue}
          title='Continue'
          fontSize={displaySmall ? 16 : 20}
          color='#fff'
          type='submit'
          marginVertical={30}
          onPress={pressHandler.bind(this, email)}
        />
      </View>
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F8F8F8",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    width: "90%",
    borderRadius: 30,
  },
});
