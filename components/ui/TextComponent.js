import { Text } from "react-native";
import { useWindowDimensions } from "react-native";
import Colors from "../../constants/Colors";

const TextComponent = (props) => {
  const window = useWindowDimensions();

  return (
    <Text
      style={{
        textAlign:props.textAlign ?? 'center',
        fontWeight: props.fontWeight ?? 'normal',
        fontSize: window.height < 700 ? 20 : props.fontSize ,
        color: Colors[props.color],
        fontSize: props.fontSize,
        
        margin:props.margin ?? 0,
        marginVertical: props.marginVertical ?? 0,
        marginHorizontal: props.marginHorizontal ?? 0,
        marginBottom: props.marginBottom ?? 0,
        marginTop:props.marginTop ?? 0
     
      }}>
      {props.title}
    </Text>
  );
};

export default TextComponent;
