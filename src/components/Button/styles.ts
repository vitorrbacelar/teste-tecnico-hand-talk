import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  touch: { width: '80%' },
  button: {
    width: '100%',
    backgroundColor: colors.main['orange'],
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
