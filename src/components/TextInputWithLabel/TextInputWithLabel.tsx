import React, { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

type Props = {
  label: string;
} & TextInputProps;

const TextInputWithLabel = ({ label }: Props) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

export default TextInputWithLabel;
