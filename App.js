import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import 'react-native-gesture-handler'
import { AuthStackNavigator } from "./src/navigators/AuthStackNavigator"


const RootStack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <RootStack.Navigator screenOptions={{
       headerShown:false
     }}>
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}>

      </RootStack.Screen>
     </RootStack.Navigator>
   </NavigationContainer>
  )
}
