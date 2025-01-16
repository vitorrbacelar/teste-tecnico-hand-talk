import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';

type DefaultButtonProps = {
  title: string;
  outline?: boolean;
} & TouchableOpacityProps;

export default function DefaultButton({
  title,
  outline,
  ...rest
}: DefaultButtonProps) {
  return (
    <TouchableOpacity style={styles.touch} {...rest}>
      <View style={outline ? styles.buttonOutline : styles.button}>
        <Text style={outline ? styles.buttonTextOutline : styles.buttonText}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
