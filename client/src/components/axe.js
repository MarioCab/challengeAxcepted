import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, useLoader } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, draco } from "@react-three/drei";

export default function Axe() {
  return (
    <Canvas
      shadowMap
      camera={{ position: [0, 0, 400] }}
      style={{ height: 500 }}
    >
      <ambientLight intensity={0.75} />
      <pointLight intensity={5} position={[-10, 25, -10]} />
      <pointLight
        castShadow
        intensity={0.5}
        angle={0.2}
        penumbra={1}
        position={[50, 50, 50]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />
      <Suspense fallback={null}>
        <ThreeDimensionalModel
          url="/axeModel/scene.gltf"
          scale={[1, 1, 1]}
          position={[0, 0, 0]}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.5}
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

function ThreeDimensionalModel({ url, ...props }) {
  const ref = React.useRef();
  const { scene } = useGLTF(url);

  return <primitive ref={ref} object={scene} dispose={null} {...props} />;
}
