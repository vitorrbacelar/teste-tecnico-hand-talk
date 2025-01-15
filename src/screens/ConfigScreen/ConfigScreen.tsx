import { Modal, Text, View } from 'react-native';
import { LoggedInStackParamList } from '../../routes/LoggedIn/LoggedInStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useObjectConfig } from '../../contexts/ObjectConfigContext';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import ObjectEditModal from '../../components/ObjectEditModal/ObjectEditModal';
import ObjectButton from '../../components/ObjectButton/ObjectButton';
import DefaultButton from '../../components/Button/Button';

type ConfigScreenNavigationProp = NativeStackNavigationProp<
  LoggedInStackParamList,
  'Config'
>;

type SubmitReturn = {
  color: string;
  shape: 'cube' | 'cone' | 'dodecahedron';
  rotation: string;
};

export default function ConfigScreen() {
  const [showEditObjectModal, setShowEditObjectModal] = useState(false);
  const [selectedObject, setSelectedObject] = useState<number>(-1);

  const navigation = useNavigation<ConfigScreenNavigationProp>();

  const { objectConfigs, setObjectConfigs } = useObjectConfig();

  function handleSave(data: SubmitReturn) {
    setObjectConfigs(prevObjectsConfigs => {
      const prevObjectsConfigsClone = [...prevObjectsConfigs];

      prevObjectsConfigsClone[selectedObject] = {
        color: data.color,
        shape: data.shape,
        rotation: [
          Number(data.rotation),
          Number(data.rotation),
          Number(data.rotation),
        ],
      };

      return prevObjectsConfigsClone;
    });
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ececec',
      }}
    >
      <StatusBar style="dark" backgroundColor="#ececec" />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: 20,
          justifyContent: 'space-evenly',
        }}
      >
        <Text>Pressione em um objeto para edita-lo</Text>
        <ObjectButton
          objectConfigs={objectConfigs}
          selectedObject={0}
          setSelectedObject={setSelectedObject}
          setShowEditObjectModal={setShowEditObjectModal}
        />

        <ObjectButton
          objectConfigs={objectConfigs}
          selectedObject={1}
          setSelectedObject={setSelectedObject}
          setShowEditObjectModal={setShowEditObjectModal}
        />

        <ObjectButton
          objectConfigs={objectConfigs}
          selectedObject={2}
          setSelectedObject={setSelectedObject}
          setShowEditObjectModal={setShowEditObjectModal}
        />
      </View>

      <View style={styles.buttonContainer}>
        <DefaultButton title="Voltar" onPress={() => navigation.goBack()} />
      </View>

      <Modal
        animationType="slide"
        visible={showEditObjectModal}
        onRequestClose={() => {
          setShowEditObjectModal(false);
        }}
        transparent
      >
        <ObjectEditModal
          defaultConfig={objectConfigs[selectedObject]}
          selectedObject={selectedObject}
          onSave={handleSave}
        />
      </Modal>
    </SafeAreaView>
  );
}
