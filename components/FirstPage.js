import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SecondPage from './SecondPage'

function FirstPage1 ({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('Feeds Page')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.pgHead}>This is Home Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text style={styles.btnTxt}>Go to Feeds Page</Text>
      </TouchableOpacity>
    </View>
  )
}
function SecondPage1 () {
  return (
    <SecondPage />
  )
}
const Stack = createNativeStackNavigator()
export default function FirstPage () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home Page'
        component={FirstPage1}
        options={{
          headerStyle: {
            backgroundColor: 'blue'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
      <Stack.Screen
        name='Feeds Page'
        component={SecondPage1}
        options={{
          headerStyle: {
            backgroundColor: 'blue'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pgHead: {
    fontSize: 19,
    fontWeight: 'bold',
    bottom: '10%'
  },
  basic: {
    height: '100%'
  },
  button: {
    backgroundColor: 'blue',
    width: '60%',
    height: '9%',
    alignItems: 'center'
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    top: '31%',
    fontWeight: 'bold'
  }
})
