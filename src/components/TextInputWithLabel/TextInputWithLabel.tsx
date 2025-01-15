import React, { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import { forwardRef, useRef } from 'react';

type Props = {
  label: string;
} & TextInputProps;

const TextInputWithLabel = forwardRef(
  ({ label, onChangeText, value, ...rest }: Props, ref) => {
    const internalInputRef = useRef<TextInput>(null);
    return (
      <View style={styles.textInputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          ref={internalInputRef}
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
    );
  },
);

export default TextInputWithLabel;
