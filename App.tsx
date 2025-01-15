import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <LoginScreen />
    </View>
  );
}
