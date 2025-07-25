import React, { Suspense, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Environment, Html, OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { PostProcessing } from "./PostProcessing";
import Experience from "./Experience";
import {useControls} from "leva"
import * as THREE from "three/webgpu";
export default function DARTPosition() {
    
  return (
    <>
    <Canvas
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props);
          await renderer.init();
          return renderer;
        }}
        style={{ background: "#1a1a1a" }}
      >
        <Environment preset="city"/>
        {/*<Stats /> */}
        <PerspectiveCamera makeDefault position={[0, 30, 80]} fov={50} />
        <OrbitControls target={[10, 0, 0]}/>
        <ambientLight intensity={1.0} />
        <Suspense fallback={<Html><h1>loading...</h1></Html>}>
          <Physics>
            <Experience/>
          </Physics>
        </Suspense>
        <PostProcessing />
      </Canvas>
    </>
  )
}
