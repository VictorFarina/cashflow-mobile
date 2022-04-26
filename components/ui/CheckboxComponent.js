import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

const CheckboxComponent = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const pressHandler = () => {
    setChecked((prevState) => !prevState);
    console.log(checked);
  };

  return (
    <Ionicons
      style={{
        ...styles.icon,
        backgroundColor: checked ? Colors.buttonBlue : "#fff",
        color: checked ? Colors.black : "transparent",
      }}
      name='checkmark'
      onPress={pressHandler}></Ionicons>
  );
};

export default CheckboxComponent;

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    fontSize: 28,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
});
