import { Text } from "react-native";
import { useWindowDimensions } from "react-native";

const TextComponent = (props) => {
  const window = useWindowDimensions();

  return (
    <Text
      style={{
        fontWeight: props.fontWeight,
        fontSize: window.height < 700 ? 20 : props.fontSize ,
        color: props.color,
        fontSize: props.fontSize,
      }}>
      {props.title}
    </Text>
  );
};

export default TextComponent;
