import { MeshProps } from '@react-three/fiber';
import React from 'react';

type Props = {
  color: string;
} & MeshProps;

function Cube({ color, ...rest }: Props) {
  return (
    <mesh {...rest} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cube;
