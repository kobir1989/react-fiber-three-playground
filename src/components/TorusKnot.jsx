import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const TorusKnot = ({ position, size, color }) => {
  const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta * 1.5;
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 1;
  //   console.log('first', state.clock.elapsedTime);
  // });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

export default TorusKnot;
