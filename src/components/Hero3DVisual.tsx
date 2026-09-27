import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Cpu, Zap, Sparkles } from 'lucide-react';

// Interactive Mouse-Following 3D Forest Green Core
function InteractiveTechGroup() {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef1 = useRef<THREE.Mesh>(null!);
  const ringRef2 = useRef<THREE.Mesh>(null!);
  const chip1Ref = useRef<THREE.Mesh>(null!);
  const chip2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const targetRotationY = state.pointer.x * 0.4;
      const targetRotationX = -state.pointer.y * 0.3;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
    }

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.35;
      ringRef1.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.25;
      ringRef2.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.6) * 0.3;
    }
    if (chip1Ref.current) {
      chip1Ref.current.rotation.y += delta * 0.5;
    }
    if (chip2Ref.current) {
      chip2Ref.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Forest Green Holographic Core */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color="#15803d"
            emissive="#047857"
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.8}
            wireframe
            distort={0.3}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Orbiting Ring 1 (Emerald Neon) */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[2.3, 2.35, 64]} />
        <meshBasicMaterial color="#059669" side={THREE.DoubleSide} transparent opacity={0.7} />
      </mesh>

      {/* Orbiting Ring 2 (Teal Sage) */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 4, 0, 0]}>
        <ringGeometry args={[2.7, 2.74, 64]} />
        <meshBasicMaterial color="#0d9488" side={THREE.DoubleSide} transparent opacity={0.65} />
      </mesh>

      {/* Floating 3D Microchip Elements */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={chip1Ref} position={[2.2, 1.2, 0.5]} scale={0.4}>
          <boxGeometry args={[1, 0.2, 1]} />
          <meshStandardMaterial color="#10b981" emissive="#047857" emissiveIntensity={0.5} wireframe />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh ref={chip2Ref} position={[-2.3, -1.4, -0.3]} scale={0.45}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#059669" emissive="#065f46" emissiveIntensity={0.5} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

// Connected Digital Node Network & Subtle Particle Constellation
function ConnectedNodeNetwork({ count = 90 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const linePosArr: number[] = [];

    for (let i = 0; i < count; i++) {
      const distance = 2.4 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = distance * Math.sin(phi) * Math.cos(theta);
      const y = distance * Math.sin(phi) * Math.sin(theta);
      const z = distance * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 1.4) {
          linePosArr.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          );
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(linePosArr),
    };
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.015;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.04;
      linesRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          color="#15803d"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#059669" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

export const Hero3DVisual: React.FC = () => {
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    if (reducedMotion || isMobile) {
      setIsLowPower(true);
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGLError(true);
    } catch (e) {
      setHasWebGLError(true);
    }
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center select-none">
      {/* Background ambient radial glowing lighting */}
      <div className="absolute inset-0 bg-radial-gradient opacity-80 pointer-events-none rounded-full blur-3xl" />

      {/* Floating ECE & AI Holographic Glass Badges */}
      <div className="absolute top-4 left-2 sm:left-4 z-10 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-md border border-emerald-600/30 animate-pulse">
        <Cpu className="w-4 h-4 text-emerald-700" />
        <span className="text-xs font-mono-tech font-bold text-emerald-950">ECE Telemetry & Hardware</span>
      </div>

      <div className="absolute bottom-6 right-2 sm:right-4 z-10 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-md border border-green-600/30">
        <Sparkles className="w-4 h-4 text-green-700" />
        <span className="text-xs font-mono-tech font-bold text-green-950">AI Agents & Vision</span>
      </div>

      <div className="absolute top-1/2 -left-2 sm:left-0 -translate-y-1/2 z-10 glass-panel p-2.5 rounded-xl shadow-md border border-teal-600/20 hidden sm:flex flex-col items-center gap-1">
        <Zap className="w-4 h-4 text-amber-600" />
        <span className="text-[10px] font-mono-tech text-emerald-900 font-bold">DSP / Signals</span>
      </div>

      {/* 3D R3F Canvas OR High Quality Fallback */}
      {!hasWebGLError ? (
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 48 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
          onError={() => setHasWebGLError(true)}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.4} color="#15803d" />
          <directionalLight position={[-10, -10, -5]} intensity={0.9} color="#0d9488" />
          <pointLight position={[0, 0, 3]} intensity={1.8} color="#10b981" />
          
          <InteractiveTechGroup />
          <ConnectedNodeNetwork count={isLowPower ? 40 : 80} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={!isLowPower}
            autoRotateSpeed={1.2}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      ) : (
        /* Fallback Graphic */
        <div className="relative w-72 h-72 rounded-full glass-panel flex items-center justify-center border-2 border-emerald-600/40 glow-box-cyan">
          <div className="w-56 h-56 rounded-full border border-green-600/30 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
            <div className="w-40 h-40 rounded-full border border-dashed border-emerald-500/50 flex items-center justify-center animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
              <div className="w-24 h-24 rounded-2xl bg-emerald-900/10 border border-emerald-600/80 flex items-center justify-center glow-box-cyan">
                <Cpu className="w-12 h-12 text-emerald-700" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
