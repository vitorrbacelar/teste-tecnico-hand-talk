import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';

type DefaultButtonProps = { title: string } & TouchableOpacityProps;

export default function DefaultButton({ title, ...rest }: DefaultButtonProps) {
  return (
    <TouchableOpacity style={styles.touch} {...rest}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
