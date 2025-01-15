import { Text, TouchableOpacity, View } from 'react-native';
import { LoggedInStackParamList } from '../../routes/LoggedIn/LoggedInStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type ConfigScreenNavigationProp = NativeStackNavigationProp<
  LoggedInStackParamList,
  'Config'
>;

export default function ConfigScreen() {
  const navigation = useNavigation<ConfigScreenNavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Teste</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
