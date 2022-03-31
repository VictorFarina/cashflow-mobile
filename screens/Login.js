import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <Button
        style={styles.button}
        title='Forgot password?'
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      />
      <Button
        style={styles.button}
        title='Sign up '
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#00aeef",
    borderColor: "red",
    borderWidth: 5,
    borderRadius: 15,
  },
});
