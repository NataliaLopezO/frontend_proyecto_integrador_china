
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ceramica_model2(props) {
  const { nodes, materials } = useGLTF("/static/4k_antique_ceramic_vase.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.antique_ceramic_vase_01_antique_ceramic_vase_01_0.geometry
          }
          material={materials.antique_ceramic_vase_01}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/4k_antique_ceramic_vase.glb");
