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

function Dodecahedron({ color, ...rest }: Props) {
  const dodecahedronMesh =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_, delta) => {
    dodecahedronMesh.current.rotation.x += delta;
    dodecahedronMesh.current.rotation.y += delta;
    dodecahedronMesh.current.rotation.z += delta;
  });

  return (
    <mesh {...rest} scale={1} ref={dodecahedronMesh}>
      <dodecahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Dodecahedron;
