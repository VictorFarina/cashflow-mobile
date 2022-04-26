import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ErrorMessageComponent from "./ErrorMessageComponent";
import Colors from "../../constants/Colors";
import useScreenSizes from "../../hooks/use-screen-sizes";

const InputComponent = (props) => {
  const display = useScreenSizes();
  const [secureText, setSecureText] = useState(props.type === "password");
  const iconPressHandler = () => {
    setSecureText((prevState) => !prevState);
  };

  return (
   
     

      <Pressable
        style={{
          backgroundColor: props.backgroundColor ?? Colors.inputGrey,
          borderColor: props.error ? Colors.validationRed : "transparent",
          position: "relative",
          borderWidth: 1,
          marginTop: props.marginTop,
          width: props.width ?? "100%",
          flexDirection: "row",
          height:
            props.height ?? display.small
              ? 50
              : display.medium
              ? 56
              : display.large
              ? 60
              : 70,
          marginVertical: display.small
            ? 10
            : display.medium
            ? 20
            : display.large
            ? 20
            : display.iPad && 40,
          padding: 10,
          borderRadius: 10,
          alignContent: "center",
          marginTop: props.marginTop,
        }}>
         {props.headerTitle && (
        <Text style={styles.headerTitle}>{props.headerTitle}</Text>
      )}
        <View style={styles.icon}>
          <Ionicons
            name={
              props.type === "e-mail"
                ? "md-mail"
                : props.type === "password"
                ? "lock-closed"
                : ""
            }
            size={
              display.small ? 20 : display.medium ? 25 : display.large ? 30 : 30
            }
            color={props.iconColor ?? Colors.inputIconColor}>
            {" "}
          </Ionicons>
        </View>

        <View style={styles.input}>
          <TextInput
            onBlur={props.onBlur}
            style={{
              alignSelf: "center",
              width: props.type === "password" ? "73%" : "100%",
              height: "100%",
            }}
            numberOfLines={1}
            secureTextEntry={secureText}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            textAlign={"left"}
            value={props.value}
          />
          {props.error && (
            <ErrorMessageComponent message={props.errorMessage} />
          )}

          {props.type === "password" && (
            <Ionicons
              style={{
                marginTop: 4,
                position: "absolute",
                right: "20%",
              }}
              name={secureText ? "eye-off" : "eye"}
              size={
                display.small
                  ? 20
                  : display.medium
                  ? 30
                  : display.large
                  ? 35
                  : 30
              }
              color={props.iconColor ?? Colors.inputIconColor}
              onPress={iconPressHandler}></Ionicons>
          )}
        </View>
      </Pressable>
   
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  headerTitle: {
    top:'-70%',
    textAlign: "left",
    position: "absolute",

  },
  icon: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginRight: 15,
    marginTop: 5,
  },

  input: {
    zIndex: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    position: "relative",
  },
});
