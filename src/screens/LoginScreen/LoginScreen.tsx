import {
  Alert,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel/TextInputWithLabel';
import { Controller, useForm } from 'react-hook-form';
import { LoginUseCase } from '../../modules/domain/usecases/LoginUseCase';
import { FirebaseAuthUserService } from '../../modules/data/FirebaseAuthUserService';
import DefaultButton from '../../components/Button/Button';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';

const firebaseAuthUserService = new FirebaseAuthUserService();
const loginUseCase = new LoginUseCase(firebaseAuthUserService);

export default function LoginScreen() {
  const { control, handleSubmit, setValue, setFocus } = useForm({
    defaultValues: { user: '', password: '' },
  });

  function handleLogin() {
    handleSubmit(async ({ user, password }) => {
      try {
        await loginUseCase.execute(user, password);
      } catch (error) {
        Alert.alert('Erro ao realizar login');
      }
    })();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#ececec' }}>
      <SafeAreaView style={{ flex: 1, margin: 30, alignItems: 'center' }}>
        <StatusBar style="dark" backgroundColor="#ececec" />
        <Text style={{ color: 'black' }}>Hand Talk</Text>
        <View style={styles.container}>
          <Controller
            name="user"
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <TextInputWithLabel
                ref={ref}
                label="E-mail:"
                placeholder="usuário123@exemplo.com"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={text => setValue('user', text)}
                onChange={onChange}
                value={value}
                onEndEditing={() => setFocus('password')}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <TextInputWithLabel
                ref={ref}
                label="Senha:"
                placeholder="*******"
                returnKeyType="go"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                secureTextEntry
                onChangeText={text => setValue('password', text)}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </View>

        <DefaultButton title="Entrar" onPress={handleLogin} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
