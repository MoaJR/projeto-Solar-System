
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Saturn(props) {
  const { nodes, materials } = useGLTF("/saturn.glb");
  return (
    <group {...props} dispose={null} scale={0.025}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0.24, 0]} scale={163.36}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_ring_0.geometry}
              material={materials.ring}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/saturn.glb");