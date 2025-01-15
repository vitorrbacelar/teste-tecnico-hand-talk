import React from 'react';

type Props = {
  color: string;
};

function Cube({ color }: Props) {
  return (
    <mesh position={[0, 2, 0]} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cube;
