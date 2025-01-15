import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  objectOptionsContainer: {
    borderColor: 'black',
    width: '70%',
    height: '30%',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
  },
  objectOptionsTitle: {
    fontSize: 20,
    color: 'black',
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
  objectOptionTitle: {
    fontWeight: '600',
  },
  colorAndRotationInput: {
    color: 'black',
    fontSize: 14,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ececec',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
});
