import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
  },
});
