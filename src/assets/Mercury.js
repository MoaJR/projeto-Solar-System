
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mercury(props) {
  const { nodes, materials } = useGLTF("/mercuryFix.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.moon}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mercuryFix.glb");