import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Feeds from './components/Feeds'

export default function App () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Feeds />
      </NavigationContainer>
      <StatusBar style='light' />
    </SafeAreaProvider>
  )
}
