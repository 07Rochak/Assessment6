import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

function NotificationsScreen () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Notifications Page</Text>
    </View>
  )
}

function MessagesScreen () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Messages Page</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function App () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Notifications' component={NotificationsScreen} />
      <Drawer.Screen name='Messages' component={MessagesScreen} />
    </Drawer.Navigator>
  )
}
