import { StyleSheet, TextInput, View, Pressable } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ErrorMessageComponent from "../ui/ErrorMessageComponent";
import Colors from "../../constants/Colors";

const TextInputComponent = (props) => {
  const [secureText, setSecureText] = useState(props.type === "password");
  const iconPressHandler = () => {
    setSecureText((prevState) => !prevState);
  };
  return (
    <Pressable
      style={{
        backgroundColor: props.backgroundColor ?? "#fff",
        borderColor: props.error ? Colors.validationRed : "transparent",
        position: "relative",
        borderWidth: 1,
        width: props.width ?? "100%",
        flexDirection: "row",
        height: 60,
        marginVertical: 20,
        padding: 10,
        borderRadius: 10,
        alignContent: "center",
      }}>
      <View style={styles.icon}>
        <Ionicons
          name={props.icon}
          size={30}
          color={props.iconColor}></Ionicons>
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
        {props.error && <ErrorMessageComponent message={props.errorMessage} />}

        {props.type === "password" && (
          <Ionicons
            style={{
              marginTop: 4,
              position: "absolute",
              right: "15%",
            }}
            name={secureText ? "eye-off" : "eye"}
            size={30}
            color={props.iconColor}
            onPress={iconPressHandler}></Ionicons>
        )}
      </View>
    </Pressable>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
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
