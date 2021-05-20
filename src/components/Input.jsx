import React from 'react'
import { View, StyleSheet,TextInput } from "react-native"

export default function Input({style, ...props}) {
  return (
   
      <TextInput {...props} style={[style, styles.input]} />
   
  )
}

const styles= StyleSheet.create({
  input: {
     backgroundColor: '#ccc',
     width:'100%',
     padding:20,
     borderRadius:8
}

})

