import React from 'react';

type Props = {
  color: string;
};

function Dodecahedron({ color }: Props) {
  return (
    <mesh>
      <dodecahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Dodecahedron;
