import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Torus = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 1.5;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 1;
    console.log('first', state.clock.elapsedTime);
  });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
