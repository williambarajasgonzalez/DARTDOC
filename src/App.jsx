import React, { Suspense } from "react";
import * as THREE from "three/webgpu";
import { extend } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import { useTeamLeaderStore } from "./useTeamLeaderStore";
import DARTPosition from "./GameEngine/DARTPosition";

extend({
  MeshBasicNodeMaterial: THREE.MeshBasicNodeMaterial,
  MeshStandardNodeMaterial: THREE.MeshStandardNodeMaterial,
});

export default function App() {
  const setPosition = useTeamLeaderStore((s) => s.setPosition);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-neutral-800 text-white px-4 py-6 space-y-6 overflow-auto">
      {/* Header and Controls */}
      <div className="flex gap-4">
        <img className="w-20 rounded-2xl shadow-2xl" src="/logo/doclogo.png"/>
        <h1 className="text-4xl font-bold mb-2">D.A.R.T. Formations</h1>
      </div>
    
      {/* Descriptions */}
      <div className="w-full flex gap-3 justify-center text-left">
        <FormationCard
          title="1. Line Formation"
          points={[
            "Used when a direct, forceful approach is needed.",
            "Best during crowd control or physical confrontations.",
            "Officers stand shoulder-to-shoulder for maximum presence.",
          ]}
        />
        <FormationCard
          title="2. Squad Formation"
          points={[
            "Used for standard movement and situational control.",
            "Ensures team balance and good visibility.",
            "Maintains flexibility to shift to other formations.",
          ]}
        />
        <FormationCard
          title="3. Modified Squad Formation"
          points={[
            "Used in narrow hallways or tight areas.",
            "Keeps the team close while maintaining alignment.",
            "Useful when space prevents full squad spread.",
          ]}
        />
      </div>

      {/* 3D Viewer */}
      <div className="w-full h-[550px] rounded-lg overflow-hidden border border-neutral-600 shadow-lg">
        <DARTPosition />
      </div>
      {/* Formation Button */}
      <div className="flex gap-4 justify-center bg-neutral-700 border border-neutral-600 p-3 rounded-xl shadow-lg ">
          <Button onClick={() => setPosition("Line")}>Line</Button>
          <Button onClick={() => setPosition("Squad")}>Squad</Button>
          <Button onClick={() => setPosition("Modified")}>Modified</Button>
      </div>
        
    </div>
  );
}

// Description Card Component
function FormationCard({ title, points }) {
  return (
    <div className="bg-neutral-700 border border-neutral-600 p-3 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
        {points.map((pt, idx) => (
          <li key={idx}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}
