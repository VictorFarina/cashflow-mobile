import { Text, TouchableOpacity } from "react-native";
import useScreenSizes from "../../hooks/use-screen-sizes";
import Colors from "../../constants/Colors";

const ButtonComponent = (props) => {
  const display = useScreenSizes();
  return (
  
    <TouchableOpacity
      style={{

        alignItems: "center",
        backgroundColor: props.backgroundColor ?? Colors.buttonBlue,
        width: props.width ?? '100%',
        marginTop: props.marginTop ?? 10 ,
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
          fontSize: props.fontSize ?? 20,
          fontWeight: props.fontWeight ,
          color: props.textColor ?? '#fff',
        }}>
        {props.title}
      </Text>

    </TouchableOpacity>
  );
};


export default ButtonComponent;

