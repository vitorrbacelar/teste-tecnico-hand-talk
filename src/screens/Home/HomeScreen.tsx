import {
  Alert,
  Image,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Canvas } from '@react-three/fiber';
import { styles } from './styles';
import { LoggedInStackParamList } from '../../routes/LoggedIn/LoggedInStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { FirebaseAuthUserService } from '../../modules/data/FirebaseAuthUserService';
import { LogoutUseCase } from '../../modules/domain/usecases/LogoutUseCase';
import { useObjectConfig } from '../../contexts/ObjectConfigContext';
import { Object3DFactory } from '../../factory/Object3DFactory';
import React from 'react';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  LoggedInStackParamList,
  'Home'
>;

const firebaseAuthUserService = new FirebaseAuthUserService();
const logoutUseCase = new LogoutUseCase(firebaseAuthUserService);

export default function HomeScreen() {
  const { height, width } = useWindowDimensions();

  const { objectConfigs } = useObjectConfig();

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const canvasHeight = (75 / 100) * height;

  async function handleLogout() {
    try {
      await logoutUseCase.execute();
    } catch (error) {
      Alert.alert('Não foi possível realizar logout');
    }
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar style="dark" backgroundColor="#ececec" />
      <Canvas style={{ height: canvasHeight, width }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />

        {objectConfigs.map((objectConfig, index) => (
          <React.Fragment key={objectConfig.shape + index}>
            {Object3DFactory.create(objectConfig, index)}
          </React.Fragment>
        ))}
      </Canvas>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Image
            style={styles.image}
            source={require('../../assets/gear-svgrepo-com.png')}
          />
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity onPress={handleLogout}>
          <Image
            style={styles.image}
            source={require('../../assets/logout-2-svgrepo-com.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
