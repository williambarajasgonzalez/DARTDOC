import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useMemo, useRef } from "react";
import { DoubleSide } from "three";
import {
  color,
  mix,
  uv,
  time,
  mul,
  mx_fractal_noise_vec3,
  step,
  sin,
  positionLocal,
  add,
  vertexIndex,
  hash,
  vec3,
  uniform,
  mx_noise_vec3
} from "three/tsl";
import { useGLTF } from "@react-three/drei";
export default function Sword() {
  const { nodes, materials } = useGLTF("/sword.glb");

  const { tslHandle } = useMemo(() => {
    const uvC = uv().mul(15)
    const noise = mx_fractal_noise_vec3(uvC);
    const finalColorHandle = mix(color("#ffffff"), color("#424242"), noise.x);
    return {
      tslHandle: {
        side: DoubleSide,
        colorNode: finalColorHandle,
      },
    };
  }, []);

  const { tslBlade } = useMemo(() => {
    const uvCord = uv().mul(2.0)
    const noise = mx_fractal_noise_vec3(vec3(uvCord.x, uvCord.y, time.mul(0.3)));
    const finalColorBlade = mix(color("#599ff0"), color("#064d9e"), noise.x);
    return {
      tslBlade: {
        side: DoubleSide,
        colorNode: finalColorBlade,
        emissiveNode: finalColorBlade,
        
      },
    };
  }, []);

  const { tslGrip } = useMemo(() => {
    const uvC = uv().mul(50)
    const noise = mx_noise_vec3(uvC);
    const finalColorHandle = mix(color("#078cf2"), color("#073af2"), noise.x);
    return {
      tslGrip: {
        side: DoubleSide,
        colorNode: finalColorHandle,
      },
    };
  }, []);

  return (
    <RigidBody type="fixed">
      <group dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.end.geometry}>
          <meshStandardNodeMaterial {...tslBlade} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.handle.geometry}>
          <meshStandardNodeMaterial {...tslHandle} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.blade.geometry}>
          <meshStandardNodeMaterial {...tslBlade} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.grip.geometry}>
          <meshStandardNodeMaterial {...tslGrip} />
        </mesh>
      </group>
    </RigidBody>
  );
}
