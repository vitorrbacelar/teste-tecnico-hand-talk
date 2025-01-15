import { Image, SafeAreaView, useWindowDimensions, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Canvas } from '@react-three/fiber';
import Dodecahedron from '../../components/Dodecahedron/Dodecahedron';
import Cone from '../../components/Cone/Cone';
import Cube from '../../components/Cube/Cube';
import { styles } from './styles';

export default function HomeScreen() {
  const { height, width } = useWindowDimensions();

  const canvasHeight = (75 / 100) * height;

  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar style="light" backgroundColor="orange" />
      <Canvas style={{ height: canvasHeight, width }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Cube position={[0, 2, 0]} color={'red'} />
        <Cone position={[0, 0, 0]} color={'blue'} />
        <Dodecahedron position={[0, -2, 0]} color={'yellow'} />
      </Canvas>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/gear-svgrepo-com.png')}
        />
        <View style={styles.line} />
        <Image
          style={styles.image}
          source={require('../../assets/logout-2-svgrepo-com.png')}
        />
      </View>
    </SafeAreaView>
  );
}
