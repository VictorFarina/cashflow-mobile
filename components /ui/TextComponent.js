import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const TextComponent = (props) => {
  return (
    <View>
      <Text style={styles[props.type]}>{props.children}</Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  primary: {
    fontWeight: "500",
    fontSize: 32,
    color: Colors.black,
  },

  secondary: {
    fontWeight: "200",
    fontSize: 22,
    color: Colors.grey,
  },
  
});
