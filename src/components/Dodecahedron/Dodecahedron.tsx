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

function Dodecahedron({ color, rotation, ...rest }: Props) {
  const dodecahedronMesh =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_, delta) => {
    if (dodecahedronMesh.current) {
      const x = rotation[0] * (Math.PI / 180);
      const y = rotation[1] * (Math.PI / 180);
      const z = rotation[2] * (Math.PI / 180);

      dodecahedronMesh.current.rotation.x += x * delta;
      dodecahedronMesh.current.rotation.y += y * delta;
      dodecahedronMesh.current.rotation.z += z * delta;
    }
  });

  return (
    <mesh {...rest} scale={1} ref={dodecahedronMesh}>
      <dodecahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Dodecahedron;
