import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

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
    alignItems: "center",
    color:'#fff' ,
    backgroundColor: Colors.cashFlowBlue,
    padding: 25,
    borderRadius:5,
    width: 300,
    marginVertical:20 
  },
});
