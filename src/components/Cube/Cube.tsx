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

function Cube({ color, rotation, ...rest }: Props) {
  const cubeMesh =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_, delta) => {
    if (cubeMesh.current) {
      const xRotation = rotation[0] * (Math.PI / 180);
      const yRotation = rotation[1] * (Math.PI / 180);
      const zRotation = rotation[2] * (Math.PI / 180);

      cubeMesh.current.rotation.x += xRotation * delta;
      cubeMesh.current.rotation.y += yRotation * delta;
      cubeMesh.current.rotation.z += zRotation * delta;
    }
  });

  return (
    <mesh {...rest} position={[0, 2, 0]} scale={1} ref={cubeMesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cube;
