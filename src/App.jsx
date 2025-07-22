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
    <div className="w-full h-screen flex flex-col items-center bg-neutral-800">
      {/* Header and Controls */}
      <div className="flex gap-4 p-4 w-full backdrop-blur-xl bg-white/80 items-center justify-start border-2">
        <img className="w-14 rounded-2xl shadow-2xl" src="/logo/doclogo.png"/>
        <h1 className="text-lg font-bold mb-2 text-black ">D.A.R.T. Formations</h1>
      </div>
    
      {/* Descriptions */}
      <div className="w-full flex gap-3 justify-center text-left my-8">
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

      <div className="flex gap-4 justify-center rounded-xl mb-4">
          <Button variant="secondary" onClick={() => setPosition("Line")}>Line</Button>
          <Button variant="secondary"onClick={() => setPosition("Squad")}>Squad</Button>
          <Button variant="secondary" onClick={() => setPosition("Modified")}>Modified</Button>
      </div>

      <div className="w-full h-[550px] rounded-lg overflow-hidden border border-neutral-600 shadow-lg">
        <DARTPosition />
      </div>

      <div className="backdrop-blur-xl bg-white/80 w-full">
          
      </div>
        
    </div>
  );
}

// Description Card Component
function FormationCard({ title, points }) {
  return (
    <div className="backdrop-blur-xl bg-white/80 border border-neutral-600 p-3 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        {points.map((pt, idx) => (
          <li key={idx}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}
