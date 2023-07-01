import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ceramica_model1(props) {
  const { nodes, materials } = useGLTF("/static/ceramic_teapot.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Ceramic_TeaPot_Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Ceramic_TeaPot_Up}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Ceramic.Cup"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/ceramic_teapot.glb");