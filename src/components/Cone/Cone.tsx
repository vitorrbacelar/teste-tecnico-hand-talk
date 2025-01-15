import { MeshProps } from '@react-three/fiber';
import React from 'react';

type Props = {
  color: string;
} & MeshProps;

function Cone({ color, ...rest }: Props) {
  return (
    <mesh {...rest} scale={1}>
      <coneGeometry args={[0.6, 1, 30]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cone;
