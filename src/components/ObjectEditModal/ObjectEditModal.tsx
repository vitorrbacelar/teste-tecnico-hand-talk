import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import TextInputWithLabel from '../TextInputWithLabel/TextInputWithLabel';
import { Object3D } from '../../modules/domain/entities/Object3D';
import DefaultButton from '../Button/Button';
import { styles } from './styles';

type SubmitReturn = {
  color: string;
  shape: 'cube' | 'cone' | 'dodecahedron';
  rotation: string;
};

type ObjectEditModalProps = {
  onSave: (data: SubmitReturn) => void;
  selectedObject: number;
  defaultConfig: Object3D;
};

export default function ObjectEditModal({
  onSave,
  defaultConfig,
}: ObjectEditModalProps) {
  const { control, handleSubmit, setValue } = useForm<SubmitReturn>({
    defaultValues: {
      color: defaultConfig.color,
      shape: defaultConfig.shape,
      rotation: String(defaultConfig.rotation[0]),
    },
  });

  const onSubmit = (data: SubmitReturn) => {
    onSave(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de Forma</Text>
      <Controller
        name="shape"
        control={control}
        render={({ field: { value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={itemValue => setValue('shape', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Cubo" value="cube" />
            <Picker.Item label="Cone" value="cone" />
            <Picker.Item label="Dodecaedro" value="dodecahedron" />
          </Picker>
        )}
      />

      <Controller
        name="color"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <TextInputWithLabel
            ref={ref}
            label="Cor"
            style={styles.input}
            value={value}
            onChangeText={text => setValue('color', text)}
            placeholder="Cor em hexadecimal (#RRGGBB)"
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="rotation"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <TextInputWithLabel
            ref={ref}
            label="Rotação"
            style={styles.input}
            value={value}
            onChangeText={text => setValue('rotation', text)}
            placeholder="Rotação (em graus)"
            keyboardType="numeric"
            onChange={onChange}
          />
        )}
      />

      <DefaultButton
        title="Salvar Configurações"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
