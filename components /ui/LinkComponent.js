import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const LinkComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.link}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default LinkComponent;

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
