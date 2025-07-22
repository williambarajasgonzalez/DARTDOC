import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useMemo, useRef, useState } from "react";
import { useTeamLeaderStore } from "../useTeamLeaderStore";
import * as THREE from "three";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function () {
  const position = useTeamLeaderStore((s) => s.position);
  const {scene} = useGLTF("/GLTFModel/12shotgun.glb")
  const {scene: weapon} = useGLTF("/GLTFModel/40mm.glb")
  const shotgunModel = () => clone(scene)
  const weaponModel = () => clone(weapon)
  const groupRef = useRef();
  const memberOneRef = useRef();
  const memberTwoRef = useRef();
  const memberThreeRef = useRef();
  const memberFourRef = useRef();
  const memberFiveRef = useRef();
  const memberSixRef = useRef();
  const memberSevenRef = useRef();
  const shotgun = "/shotgun/shotgun.png"
  const gun37 = "/37/37mm.png"
  const SPEED = 0.02;
  const LINE = [
    { x: 0, y: 1, z: 0, r: memberOneRef },
    { x: 5, y: 1, z: 0, r: memberTwoRef },
    { x: 10, y: 1, z: 0, r: memberThreeRef },
    { x: 15, y: 1, z: 0, r: memberFourRef },
    { x: 20, y: 1, z: 0, r: memberFiveRef },
    { x: 25, y: 1, z: 0, r: memberSixRef },
    { x: 12.5, y: 1, z: 10, r: memberSevenRef },
  ];
  const SQUAD = [
    { x: 20, y: 1, z: 17, r: memberOneRef },
    { x: 15, y: 1, z: 9, r: memberTwoRef },
    { x: 10, y: 1, z: 0, r: memberThreeRef },
    { x: 15, y: 1, z: 0, r: memberFourRef },
    { x: 10, y: 1, z: 9, r: memberFiveRef },
    { x: 5, y: 1, z: 17, r: memberSixRef },
    { x: 12.5, y: 1, z: -20, r: memberSevenRef },
  ];

  const MODIFIED = [
    { x: 16, y: 1, z: 17, r: memberOneRef },
    { x: 11, y: 1, z: 9, r: memberTwoRef },
    { x: 7, y: 1, z: 0, r: memberThreeRef },
    { x: 18, y: 1, z: 0, r: memberFourRef },
    { x: 13, y: 1, z: 9, r: memberFiveRef },
    { x: 8, y: 1, z: 17, r: memberSixRef },
    { x: 12.5, y: 1, z: -20, r: memberSevenRef },
  ];
  useFrame(() => {
    if (!groupRef) return;
    if (position === "Squad") {
      SQUAD.forEach((mem, index) => {
        const body = mem.r;
        const newX = THREE.MathUtils.lerp(
          body.current.translation().x,
          mem.x,
          SPEED
        );
        const newY = THREE.MathUtils.lerp(
          body.current.translation().y,
          mem.y,
          SPEED
        );
        const newZ = THREE.MathUtils.lerp(
          body.current.translation().z,
          mem.z,
          SPEED
        );
        body.current.setNextKinematicTranslation({ x: newX, y: newY, z: newZ });
      });
    }
    if (position === "Line") {
      LINE.forEach((mem, index) => {
        const body = mem.r;
        const newX = THREE.MathUtils.lerp(
          body.current.translation().x,
          mem.x,
          SPEED
        );
        const newY = THREE.MathUtils.lerp(
          body.current.translation().y,
          mem.y,
          SPEED
        );
        const newZ = THREE.MathUtils.lerp(
          body.current.translation().z,
          mem.z,
          SPEED
        );
        body.current.setNextKinematicTranslation({ x: newX, y: newY, z: newZ });
      });
    }
    if (position === "Modified") {
      MODIFIED.forEach((mem, index) => {
        const body = mem.r;
        const newX = THREE.MathUtils.lerp(
          body.current.translation().x,
          mem.x,
          SPEED
        );
        const newY = THREE.MathUtils.lerp(
          body.current.translation().y,
          mem.y,
          SPEED
        );
        const newZ = THREE.MathUtils.lerp(
          body.current.translation().z,
          mem.z,
          SPEED
        );
        body.current.setNextKinematicTranslation({ x: newX, y: newY, z: newZ });
      });
    }
  });

  const memberInformation = [
    {
      button: "#1",
      role: "Dart Member One",
      weapon: "12 Gauge Shotgun",
      ammo: "54 rounds and #7 Steel",
      target: "Aiming point is the feet",
      range: "20-50 yards",
      lethal: "Less then 20 yards"
    },
    {
      button: "#2",
      role: "Dart Member Two",
      weapon: "37 mm gas gun",
      ammo: "12 Knee Knockers. 12 CS Multiple Projectiles",
      target: "3.5 yards in front of target",
      range: "20-80 yards",
      lethal: "Less then 20 yards"
    },
    {
      button: "#3",
      role: "Dart Member Three",
      weapon: "12 Gauge Shotgun",
      ammo: "54 rounds and #7 Steel",
      target: "Aiming point is the feet",
      range: "20-50 yards",
      lethal: "Less then 20 yards"
    },
    {
      button: "#4",
      role: "Dart Member Four",
      weapon: "12 Gauge Shotgun",
      ammo: "54 rounds and #7 Steel",
      target: "Aiming point is the feet",
      range: "20-50 yards",
      lethal: "Less then 20 yards"
    },
    {
      button: "#5",
      role: "Dart Member Five",
      weapon: "37 mm gas gun",
      ammo: "12 Knee Knockers. 12 CS Multiple Projectiles",
      target: "3.5 yards in front of target",
      range: "20-80 yards",
      lethal: "Less then 20 yards"
    },
    {
      button: "#6",
      role: "Dart Member Six",
      weapon: "12 Gauge Shotgun",
      ammo: "54 rounds and #7 Steel",
      target: "Aiming point is the feet",
      range: "20-50 yards",
      lethal: "Less then 20 yards"
    },
    {
      button: "#7",
      role: "Dart Member Seven Team Leader",
      weapon: "6 Stingers. 4 Flash Bangs. 2 CS Stinger Grenades. 2 Smoke.",
      ammo: "",
      target: "Wind direction and escape",
      range: "",
      lethal: ""
    },
  ]
  const Member = ({ info }) => {
    const isGasGun = info.weapon.includes("37 mm");
    const weaponImage = isGasGun ? gun37 : shotgun;
    return (
      <Html className=" select-none" center>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost" className="rounded-full text-xs">
              {info.button}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-neutral-800 text-white border border-neutral-600 shadow-xl max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold mb-2">{info.role}</DialogTitle>
            </DialogHeader>
  
            <div className="space-y-2 text-sm">
              <img src={weaponImage} alt={info.weapon} className="w-full h-32 object-contain rounded-md border border-neutral-700 bg-neutral-700" />
              <div className="grid grid-cols-2 gap-2">
                <div className="font-semibold">Weapon:</div>
                <div>{info.weapon}</div>
                {info.ammo && (
                  <>
                    <div className="font-semibold">Ammo:</div>
                    <div>{info.ammo}</div>
                  </>
                )}
                {info.target && (
                  <>
                    <div className="font-semibold">Target:</div>
                    <div>{info.target}</div>
                  </>
                )}
                {info.range && (
                  <>
                    <div className="font-semibold">Range:</div>
                    <div>{info.range}</div>
                  </>
                )}
                {info.lethal && (
                  <>
                    <div className="font-semibold">Lethal Range:</div>
                    <div>{info.lethal}</div>
                  </>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Html>
    );
  };
  
  return (
    <>
      <group ref={groupRef}>
        <RigidBody ref={memberOneRef} type="kinematicPosition">
          <mesh position={[0, 1, 0]}>
            <capsuleGeometry args={[3, 3]} />
            <meshStandardNodeMaterial color={"blue"} />
            <Member info={memberInformation[0]} />
          </mesh>
          <primitive scale={[1.5,1.5,1.5]} rotation={[0,2,1.5]} position={[0,1,-5]} object={shotgunModel()}/> 
        </RigidBody>
        
        <RigidBody ref={memberTwoRef} type="kinematicPosition">
          <mesh position={[5, 1, 0]}>
            <capsuleGeometry args={[3, 3]} />
            <meshStandardNodeMaterial color={"brown"} />
            <Member info={memberInformation[1]}/>
          </mesh>
          <primitive scale={[6,6,6]} rotation={[1.5,0,-1.7]} position={[5,1,-4]} object={weaponModel()}/> 
        </RigidBody>

        <RigidBody ref={memberThreeRef} type="kinematicPosition">
          <mesh position={[10, 1, 0]}>
            <capsuleGeometry args={[3, 3]} />
            <meshStandardNodeMaterial color={"blue"} />
            <Member info={memberInformation[2]}/>
          </mesh>
          <primitive scale={[1.5,1.5,1.5]} rotation={[0,2,1.5]} position={[9,1,-5]} object={shotgunModel()}/> 
        </RigidBody>

        <RigidBody ref={memberFourRef} type="kinematicPosition">
          <mesh position={[15, 1, 0]}>
            <capsuleGeometry args={[3, 3]} />
            <meshStandardNodeMaterial color={"blue"} />
            <Member info={memberInformation[3]}/>
          </mesh>
          <primitive scale={[1.5,1.5,1.5]} rotation={[0,2,1.5]} position={[13,1,-5]} object={shotgunModel()}/> 
        </RigidBody>

        <RigidBody ref={memberFiveRef} type="kinematicPosition">
          <mesh position={[20, 1, 0]}>
            <capsuleGeometry args={[3, 3]} />
            <meshStandardNodeMaterial color={"brown"} />
            <Member info={memberInformation[4]}/>
          </mesh>
          <primitive scale={[6,6,6]} rotation={[1.5,0,-1.7]} position={[20,1,-4]} object={weaponModel()}/> 
        </RigidBody>

        <RigidBody ref={memberSixRef} type="kinematicPosition">
          <mesh position={[25, 1, 0]}>
            <capsuleGeometry args={[3, 3]} />
            <meshStandardNodeMaterial color={"blue"} />
            <Member info={memberInformation[5]}/>
          </mesh>
          <primitive scale={[1.5,1.5,1.5]} rotation={[0,2,1.5]} position={[23,1,-5]} object={shotgunModel()}/> 
        </RigidBody>

        <RigidBody ref={memberSevenRef} type="kinematicPosition">
          <mesh position={[12.5, 1, 10]}>
            <capsuleGeometry args={[3, 3]} />
            <meshStandardNodeMaterial color={"red"} />
            <Member info={memberInformation[6]}/>
          </mesh>
        </RigidBody>
      </group>
    </>
  );
}

useGLTF.preload("/GLTFModel/12shotgun.glb")