import { MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from 'three';

type Props = {
  color: string;
} & MeshProps;

function Cube({ color, ...rest }: Props) {
  const cubeMesh =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_, delta) => {
    cubeMesh.current.rotation.x += delta;
    cubeMesh.current.rotation.y += delta;
    cubeMesh.current.rotation.z += delta;
  });

  return (
    <mesh {...rest} scale={1} ref={cubeMesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cube;
