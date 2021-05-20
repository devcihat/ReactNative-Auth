import React from 'react'
import { View, StyleSheet, Text } from "react-native"

export default function Heading({style, children, ...props}) {
  return (
   
      <Text {...props} style={[style, styles.text]}>{children}</Text>
   
  )
}

const styles= StyleSheet.create({
  text: {
      fontWeight: 'bold',
      fontSize:24
  }

})

