import { Image } from "react-native";
import { useWindowDimensions } from 'react-native';

const LogoComponent = (props) => {  

  const window = useWindowDimensions();
  return (
      <Image
        style={{ 
          width: window.height < 700 ? 40 : props.height,
          height:window.height < 700 ? 40 : props.height 
        }}
        source={props.logo}
      />
  );
};

export default LogoComponent;
