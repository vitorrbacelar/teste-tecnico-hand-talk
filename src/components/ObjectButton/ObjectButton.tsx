import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Object3D } from '../../modules/domain/entities/Object3D';
import { SetStateAction } from 'react';

type ObjectButtonProps = {
  objectConfigs: Object3D[];
  setSelectedObject: React.Dispatch<SetStateAction<number>>;
  setShowEditObjectModal: React.Dispatch<SetStateAction<boolean>>;
  selectedObject: number;
};

export default function ObjectButton({
  objectConfigs,
  setSelectedObject,
  setShowEditObjectModal,
  selectedObject,
}: ObjectButtonProps) {
  return (
    <TouchableOpacity
      style={styles.objectOptionsContainer}
      onPress={() => {
        setShowEditObjectModal(true);
        setSelectedObject(selectedObject);
      }}
    >
      <Text style={styles.objectOptionsTitle}>Objeto {selectedObject + 1}</Text>
      <View style={styles.objectOptionContainer}>
        <View style={styles.objectOption}>
          <Text style={styles.objectOptionText}>Forma:</Text>
          <Text style={styles.objectOptionText}>
            {objectConfigs[selectedObject].shape}
          </Text>
        </View>
        <View style={styles.objectOption}>
          <Text style={styles.objectOptionText}>Rotação:</Text>
          <Text style={styles.objectOptionText}>
            {objectConfigs[selectedObject].rotation[0]}
          </Text>
        </View>
        <View style={styles.objectOption}>
          <Text style={styles.objectOptionText}>Cor:</Text>
          <Text style={styles.objectOptionText}>
            {objectConfigs[selectedObject].color}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
