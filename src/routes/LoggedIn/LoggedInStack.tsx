import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import ConfigScreen from '../../screens/ConfigScreen/ConfigScreen';

export type LoggedInStackParamList = {
  Home: undefined;
  Config: undefined;
};

const Stack = createNativeStackNavigator<LoggedInStackParamList>();

export default function LoggedInStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Config"
        component={ConfigScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
