import React, { useRef,useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
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

export function PlatfromMovement(props) {
  const { nodes, materials } = useGLTF("/GLTFModel/dartplatform.glb");
  const { tslNodes,tslWalls } = useMemo(() => {
    const uVu = uv().mul(15)
    const noise = mx_fractal_noise_vec3(uVu)
    const finalColor = mix(color("#805a2d"),color("#966b36"),noise.x)

    const wallColor = mix(color("#858382"),color("#b0afae"),noise.y)
    return {
        tslNodes: {
            colorNode: finalColor,
        },
        tslWalls: {
            colorNode: wallColor
        }
    };
  }, []);
  return (
    <RigidBody type="fixed">
      <group scale={[2,2,2]} {...props} dispose={null} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
        >
            <meshStandardNodeMaterial {...tslNodes}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.walls.geometry}
        >
            <meshStandardNodeMaterial {...tslWalls}/>
        </mesh>
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MetalFence_1.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MetalFence_2.geometry}
          material={materials.Texture_Fence}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/dartplatform.glb");
