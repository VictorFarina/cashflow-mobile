import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({

  button: {
    alignItems: "center",
    backgroundColor: "#62ACFD",
    padding: 20,
    borderRadius: 5,
  },

  title: {
    fontSize:15,
    color: "#fff",
  },


});
