// src/StarBackground.tsx
"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { StarBackgroundProps } from "./types";

const StarBackground: React.FC<StarBackgroundProps> = ({
  numStars = 5000,
  radius = 1.2,
  rotationSpeedX = 0.1,
  rotationSpeedY = 0.15,
  color = "#ffffff",
  size = 0.005,
}) => {
  const ref = useRef<any>();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(numStars), { radius })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * rotationSpeedX;
      ref.current.rotation.y -= delta * rotationSpeedY;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC<StarBackgroundProps> = (props) => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground {...props} />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
