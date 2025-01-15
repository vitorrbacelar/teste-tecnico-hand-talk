import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel/TextInputWithLabel';
import { Controller } from 'react-hook-form';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1, margin: 30 }}>
        <View>
          <Text style={{ color: 'black' }}>Hand Talk</Text>
          <View>
            <Controller
              name="user"
              render={() => (
                <TextInputWithLabel
                  label="Login:"
                  placeholder="usuário123"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                />
              )}
            />

            <Controller
              name="password"
              render={() => (
                <TextInputWithLabel
                  label="Senha:"
                  placeholder="*******"
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  secureTextEntry
                />
              )}
            />
          </View>
          <View>
            <Button title="Entrar" />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
