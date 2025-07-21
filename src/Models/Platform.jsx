import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React,{ useMemo} from "react";
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
    mx_noise_vec3,
  } from "three/tsl";

export default function Platform() {
  const { tslNodes } = useMemo(() => {
    const uVu = uv().mul(15)
    const noise = mx_fractal_noise_vec3(uVu)
    const finalColor = mix(color("#805a2d"),color("#966b36"),noise.x)
    return {
        tslNodes: {
            colorNode: finalColor,
      },
    };
  }, []);
  const {scene} = useGLTF("/GLTFModel/Camera stand.glb")

  return (
    <>
      <RigidBody type="fixed">
        <mesh rotation={[-Math.PI/2,0,0]} position={[25,-3,-20]}> 
          <planeGeometry args={[300, 300]} />
          <meshStandardNodeMaterial {...tslNodes} />
        </mesh>
      </RigidBody>
      <primitive scale={[4,4,4]} object={scene} position={[25,0,35]}/>
    </>
  );
}
useGLTF.preload("/GLTFModel/Camera stand.glb")
