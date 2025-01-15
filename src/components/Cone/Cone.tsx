import React from 'react';

type Props = {
  color: string;
};

function Cone({ color }: Props) {
  return (
    <mesh>
      <coneGeometry args={[0.3, 0.6, 27]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cone;
