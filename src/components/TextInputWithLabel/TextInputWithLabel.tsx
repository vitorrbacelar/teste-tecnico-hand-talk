import React, { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

type Props = {
  label: string;
} & TextInputProps;

const TextInputWithLabel = forwardRef(
  ({ label, onChangeText, value, ...rest }: Props, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const internalInputRef = useRef<TextInput>(null);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => internalInputRef?.current?.focus(),
        blur: () => internalInputRef?.current?.blur(),
      }),
      [],
    );

    return (
      <View style={styles.textInputContainer}>
        <Text style={[styles.label, isFocused && styles.onFocusLabel]}>
          {label}
        </Text>
        <TextInput
          ref={internalInputRef}
          style={[styles.textInput, isFocused && styles.onFocusInput]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </View>
    );
  },
);

export default TextInputWithLabel;
