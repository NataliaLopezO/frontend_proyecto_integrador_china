
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Modelo_pintura(props) {
  const { nodes, materials } = useGLTF("/static/japanese_ceramic_brasero.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hibachi_Vase_0.geometry}
          material={materials.Vase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hibachi_Lid_0.geometry}
          material={materials.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/japanese_ceramic_brasero.glb");
