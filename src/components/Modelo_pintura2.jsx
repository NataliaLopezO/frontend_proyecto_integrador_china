import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Modelo_pintura2(props) {
  const { nodes, materials } = useGLTF("/static/2_chinese_wedding_basket_1_tier.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.27, 0, -0.329]}
        rotation={[-Math.PI / 2, 0, 1.729]}
        scale={0.05}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Material0_0.geometry}
            material={materials.Material0}
            position={[-5.934, 196.809, 9.858]}
            rotation={[-Math.PI / 2, 0, 1.157]}
            scale={[85, 85, 70]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Basket_top_Material0001_0.geometry}
            material={materials["Material0.001"]}
            position={[0, 211.703, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/2_chinese_wedding_basket_1_tier.glb");
