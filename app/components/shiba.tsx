'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function MeshComponent() {
  const meshRef = useRef<Mesh>(null!);
  const fileUrl = '/shiba/scene.gltf';
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas>
        <MeshComponent />
      </Canvas>
    </div>
  );
}
