import { StyleSheet, Image, View } from "react-native";
import React from "react";

const LogoComponent = (props) => {
  return (
    <View>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: props.width, height: props.height }}
      />
    </View>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({});
