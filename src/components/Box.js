import React from 'react';

export default function Box() {
  return (
    <mesh>
      <sphereBufferGeometry args={ [2.5, 128, 128] } attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
