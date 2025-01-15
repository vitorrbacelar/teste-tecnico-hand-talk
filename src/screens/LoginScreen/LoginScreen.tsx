import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel/TextInputWithLabel';
import { Controller, useForm } from 'react-hook-form';

export default function LoginScreen() {
  const { control, handleSubmit, setValue, setFocus } = useForm({
    defaultValues: { user: '', password: '' },
  });

  function onSubmit() {
    handleSubmit(({ user, password }) => {
      console.log(user, password);
    })();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1, margin: 30 }}>
        <View>
          <Text style={{ color: 'black' }}>Hand Talk</Text>
          <View>
            <Controller
              name="user"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <TextInputWithLabel
                  ref={ref}
                  label="Login:"
                  placeholder="usuário123"
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
          <View>
            <Button title="Entrar" onPress={onSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
