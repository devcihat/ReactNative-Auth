import React from 'react'
import {StyleSheet, View, Text } from "react-native"


export default function Error({error}) {
  return (
   <View style={styles.container}>
       <Text style={styles.text}>{error}</Text>
   </View>
  )
}

const styles= StyleSheet.create({
  container: {
    paddingVertical:0
  },
  text: {
      color: 'red',
      fontWeight:'bold',
      fontSize:10
  }
})

