import { Text, TouchableOpacity } from "react-native";
import useScreenSizes from "../../hooks/use-screen-sizes";

const ButtonComponent = (props) => {
  const display = useScreenSizes();
  return (
  
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: props.backgroundColor,
        width: props.width ?? '100%',
        marginTop: props.marginTop,
        padding: props.padding ?? display.small
            ? 20
            : display.medium
            ? 20
            : display.large
            ? 25
            : 30,
        borderRadius: 5,
      }}
      onPress={props.onPress} >
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

