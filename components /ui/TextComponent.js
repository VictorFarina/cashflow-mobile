import { Text } from "react-native";

const TextComponent = (props) => {
  return (
    <Text
      style={{
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
        color: props.color,
        fontSize: props.fontSize,
      }}>
      {props.title}
    </Text>
  );
};

export default TextComponent;
