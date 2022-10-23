import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Uranus(props) {
  const { nodes, materials } = useGLTF("/uranus.glb");
  return (
    <group {...props} dispose={null} scale={0.025}>
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 1.37, 0]} scale={154.21}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_ring_0.geometry}
              material={materials.ring}
            />
          </group>
          <group rotation={[-Math.PI / 2, 1.37, 0]} scale={147.68}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle001_ring_0.geometry}
              material={materials.ring}
            />
          </group>
          <group rotation={[-Math.PI / 2, 1.37, 0]} scale={140.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle002_ring_0.geometry}
              material={materials.ring}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/uranus.glb");
