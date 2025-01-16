import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  touch: { width: '80%', marginVertical: 10 },
  button: {
    width: '100%',
    backgroundColor: colors.main['orange'],
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    width: '100%',
    borderColor: colors.main['orange'],
    color: colors.main['orange'],
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  buttonTextOutline: {
    color: colors.main['orange'],
    fontWeight: '600',
  },
});
