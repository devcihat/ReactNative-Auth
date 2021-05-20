import React from 'react'
import {StyleSheet, Text,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


export default function IconButton({name,style,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,style]}>
        <Icon color={'purple'} size={24} name={name} />
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
  container :{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    borderRadius:8
  },
  text: {
      color: 'purple',
      fontWeight:'500',
      fontSize:14
  }
})

