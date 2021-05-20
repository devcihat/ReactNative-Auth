import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import Error from '../components/Error'
import FilledButton from '../components/FilledButton'
import Heading from '../components/Heading'
import Input from '../components/Input'
import TextButton from '../components/TextButton'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={''} />
      <Input keyboardType={'email-address'} placeholder={'Email'} style={styles.input} />
      <Input secureTextEntry placeholder={'Password'} style={styles.input} />
      <FilledButton style={styles.loginButton} onPress={() =>{}} title={'Login'} />
      <TextButton title={'Have u an account? Create one'} onPress={() => {}} />
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    alignItems: 'center',
    paddingTop:120
  },
  input: {
      marginVertical:10
  },
  title: {
      marginBottom:48
  },
  loginButton: {
      marginVertical:32
  }
})

