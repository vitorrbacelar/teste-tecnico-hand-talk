import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  textInputContainer: { width: '80%' },
  textInput: {
    color: 'black',
    fontSize: 14,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  label: {
    color: 'black',
    paddingBottom: 2,
    fontWeight: 600,
    marginLeft: 5,
  },
  onFocusInput: {
    borderColor: colors.main['orange'],
    borderWidth: 2,
  },
  onFocusLabel: {
    color: colors.main['orange'],
  },
});
