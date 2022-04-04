import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

const TextInputComponent = (props) => {
  const [secureText, setSecureText] = useState(props.type === "password");

  const iconPressHandler = () => {
    setSecureText((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name={props.icon} size={30} color={"#C9CDD4"}></Ionicons>
      </View>

      <View style={styles.input}>
        <TextInput
          secureTextEntry={secureText}
          placeholder={props.placeholder}
          onChange={props.onChange}
          textAlign={"left"}
        />

        {props.type === "password" && (
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={30}
            color={"#C9CDD4"}
            onPress={iconPressHandler}></Ionicons>
        )}
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#EBEEF3",
    height: 60,
    marginVertical: 20,
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    alignContent: "center",
  },

  icon: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginRight: 15,
    marginTop: 5,
  },

  input: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
