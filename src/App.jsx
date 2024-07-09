import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import Sphere from './components/Sphere';
import Torus from './components/Torus';
import TorusKnot from './components/TorusKnot';
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />
      {/* <group position={[0, -1, 0]} />
      <Cube position={[2, 0, 0]} color={'orange'} size={[1, 1, 1]} /> */}
      <Sphere color='#f7f3e3' position={[0, 0, 2]} />
      {/* <Torus color={'#87b6eb'} position={[1, 0, 0]} size={[1, 0.1, 30, 30]} /> */}
      {/* <TorusKnot
        color={'#f7566c'}
        position={[0, 0, 0]}
        size={[1, 0.1, 1000, 50]}
      />{' '} */}
      {/* <Cube position={[-2, 0, 0]} color={'hotpink'} size={[1, 1, 1]} />
      <Cube position={[0, -2, 0]} color={'olive'} size={[1, 1, 1]} />
      <Cube position={[0, 2, 0]} color={'gold'} size={[1, 1, 1]} /> */}
      <OrbitControls />
    </Canvas>
  );
};

export default App;
