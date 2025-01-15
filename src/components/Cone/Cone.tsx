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

function Cone({ color, ...rest }: Props) {
  const coneMesh =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_, delta) => {
    coneMesh.current.rotation.x += delta;
    coneMesh.current.rotation.y += delta;
    coneMesh.current.rotation.z += delta;
  });

  return (
    <mesh {...rest} scale={1} ref={coneMesh}>
      <coneGeometry args={[0.6, 1, 30]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cone;
