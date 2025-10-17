"use client";

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';

function Particles({ count = 5000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { size, viewport } = useThree();
  const [sphere] = useState(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 4;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  const mouse = useRef([0, 0]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
        mouse.current[0] += (state.pointer.x * viewport.width / 2 - mouse.current[0]) * 0.05;
        mouse.current[1] += (state.pointer.y * viewport.height / 2 - mouse.current[1]) * 0.05;
        pointsRef.current.rotation.y = mouse.current[0] * 0.1;
        pointsRef.current.rotation.x = -mouse.current[1] * 0.1;
        pointsRef.current.rotation.z -= delta * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Particles />
      </Canvas>
    </div>
  );
}
