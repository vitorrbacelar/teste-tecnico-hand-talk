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

function Cone({ color, rotation, ...rest }: Props) {
  const coneMesh =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_, delta) => {
    if (coneMesh.current) {
      const xRotation = rotation[0] * (Math.PI / 180);
      const yRotation = rotation[1] * (Math.PI / 180);
      const zRotation = rotation[2] * (Math.PI / 180);

      coneMesh.current.rotation.x += xRotation * delta;
      coneMesh.current.rotation.y += yRotation * delta;
      coneMesh.current.rotation.z += zRotation * delta;
    }
  });

  return (
    <mesh {...rest} position={[0, 0, 0]} scale={1} ref={coneMesh}>
      <coneGeometry args={[0.6, 1, 30]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cone;
