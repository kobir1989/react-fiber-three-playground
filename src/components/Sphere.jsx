import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';

const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
    // ref.current.rotation.x += 0.1;
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onClick={() => setIsClicked((prev) => !prev)}
      onPointerLeave={() => setIsHovered(false)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={[1, 30, 30]} />
      <meshStandardMaterial color={isHovered ? 'orange' : 'yellow'} wireframe />
    </mesh>
  );
};

export default Sphere;
