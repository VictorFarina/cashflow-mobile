import { Text, TouchableOpacity } from "react-native";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: props.backgroundColor,
        width: props.width,
        padding: 20,
        borderRadius: 5,
      }}
      onPress={props.onPress}>
      <Text
        style={{
          fontSize: props.fontSize,
          color: props.color,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
