import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const TextComponent = (props) => {
  console.log(props);

  return (
    <View>
      <Text style={styles.primary}>{props.title}</Text>
    </View>
  )
}

export default TextComponent

const styles = StyleSheet.create({

primary:{
  color:'black',

},
secondary:{
  color:'red',

}
  
})