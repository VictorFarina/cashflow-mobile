import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

const TextInputComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name={props.icon} size={30} color={Colors.grey}></Ionicons>
      </View>

      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#e2ebf0",
    height: 60,
    marginVertical: 20,
    borderWidth: 0,
    padding: 10,
    borderRadius: 7,
    alignContent:'center',
    
  },

  icon:{
    marginRight:15, 
    marginTop:5,
  }


});
