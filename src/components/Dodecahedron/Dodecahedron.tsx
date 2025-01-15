import { MeshProps } from '@react-three/fiber';
import React from 'react';

type Props = {
  color: string;
} & MeshProps;

function Dodecahedron({ color, ...rest }: Props) {
  return (
    <mesh {...rest} scale={1}>
      <dodecahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Dodecahedron;
