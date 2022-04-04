import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";



const LinkComponent = (props) => {

  const align = props.textAlign ? styles[props.textAlign] : styles.left;
 
  return (
    <TouchableOpacity  style={align} onPress={props.onPress}>

        <Text style={styles.link}>{props.title}</Text>
      
    </TouchableOpacity>
  );
};

export default LinkComponent;

const styles = StyleSheet.create({
  link: {
    color: "#62ACFD",
    
  
  },
  left:{
    alignItems:'flex-start'
  },
    center:{
    alignItems:'center'
  },
  right:{
    alignItems:'flex-end'
  },

});
