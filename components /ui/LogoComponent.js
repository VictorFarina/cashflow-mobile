import { Image } from "react-native";

const LogoComponent = (props) => {  
  return (
      <Image
        style={{ 
          width: props.width, 
          height: props.height 
        }}
        source={props.logo}
      />
  );
};

export default LogoComponent;
