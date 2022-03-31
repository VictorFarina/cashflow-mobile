import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Forgot = (props) => {
  return (
    <View style={styles.container}>
      <Text>Forgot</Text>
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
