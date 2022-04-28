import { Text, View ,StyleSheet} from "react-native";
import React from "react";
import TextComponent from "./TextComponent";

const StatusComponent = (props) => {
  return (
    <View style={styles.statusComponent}>
      <View
        style={{
          height: 10,
          width: 10,
          marginRight:5,
          borderRadius: 50,
          backgroundColor:props.status==='Cerrada' ? "red" : "green",
        }}></View>
      <TextComponent title={props.status ? props.status : ""} />
    </View>
  );
};

export default StatusComponent;

const styles = StyleSheet.create({
  statusComponent:{
    flexDirection:'row',
    alignItems:'center'
  }
})



