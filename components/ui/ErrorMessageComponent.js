import { Text } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const ErrorMessageComponent = (props) => {
  return (
    <Text
      style={{
        color: Colors.validationRed,
        position: "absolute",
        top: "140%",
        left: "-15%",
      }}>
      {props.message}
    </Text>
  );
};

export default ErrorMessageComponent;
