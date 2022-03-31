import { StyleSheet, TextInput } from "react-native";
import React from "react";

const TextInputComponent = (props) => {
  return <TextInput 
      style={styles.input} 
      placeholder={props.placeholder} 
      onChange={props.onChange}/>;
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 20,
    borderWidth: 0,
    padding: 10,
    borderRadius: 7,
    width: "80%",
    backgroundColor: "#e2ebf0",
  },
});
