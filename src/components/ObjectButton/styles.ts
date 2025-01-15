import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  objectOptionsContainer: {
    backgroundColor: '#ccc',
    width: '70%',
    height: '30%',
    borderRadius: 8,
    alignItems: 'center',
  },
  objectOptionsTitle: {
    fontSize: 20,
    color: '#111',
    fontWeight: '600',
  },
  objectOptionContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  objectOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  objectOptionText: {
    color: '#111',
    fontWeight: '600',
  },
});
