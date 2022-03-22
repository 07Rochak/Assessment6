import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import FirstPage from './FirstPage'
import { Ionicons } from '@expo/vector-icons'
import { Text, View, StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

function Page1 () {
  return (
    <FirstPage />
  )
}

function Page2 () {
  return (
    <View style={styles.container}>
      <Text style={styles.pgHead}>This is project's page</Text>
    </View>
  )
}

const Feeds = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Projects') {
            iconName = focused ? 'document' : 'document-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name='Home' component={Page1} options={{ title: 'Home', headerStyle: { height: '0%' }, tabBarBadge: 3 }} />
      <Tab.Screen name='Projects' component={Page2} options={{ title: 'Projects', headerStyle: { backgroundColor: 'blue' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
    </Tab.Navigator>
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
  }
})

export default Feeds
