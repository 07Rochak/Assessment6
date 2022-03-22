import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SecondPage () {
  return (
    <View style={styles.container}>
      <Text style={styles.pgHead}>This is Feeds Page</Text>
    </View>
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
    fontWeight: 'bold'
  }
})
