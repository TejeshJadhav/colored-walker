import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CharacterWalking from './character-walking'
import { OrbitControls } from '@react-three/drei'
import "./styles.css";
import { AmbientLight, DirectionalLight } from "three";



export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <CharacterWalking />
      </Suspense>
    </Canvas>
  );
}
