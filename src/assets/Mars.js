import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mars(props) {
  const { nodes, materials } = useGLTF("/mars.glb");
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
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mars.glb");