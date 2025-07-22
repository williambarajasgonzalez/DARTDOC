import React, { Suspense } from "react";
import * as THREE from "three/webgpu";
import { extend } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import { useTeamLeaderStore } from "./useTeamLeaderStore";
import DARTPosition from "./GameEngine/DARTPosition";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import WeaponPosition from "./ComponentUI/WeaponPosition";
import DARTmovement from "./GameEngine/DARTmovement";

extend({
  MeshBasicNodeMaterial: THREE.MeshBasicNodeMaterial,
  MeshStandardNodeMaterial: THREE.MeshStandardNodeMaterial,
});

export default function App() {
  const setPosition = useTeamLeaderStore((s) => s.setPosition);

  return (
    <div className="w-full flex flex-col items-center gap-8 bg-neutral-800">
      {/* Header and Controls */}
      <nav className="flex gap-4 p-4 sticky top-0 w-full backdrop-blur-xl bg-white/80 items-center justify-start border-2 z-20">
        <img className="w-14 rounded-2xl shadow-2xl" src="/logo/doclogo.png"/>
        <h1 className="text-lg font-bold mb-2 text-black ">D.A.R.T.  Designated Armed Response Team</h1>
      </nav>
    
      <h2 className="scroll-m-20 border-b pb-2 text-white pt-6 text-3xl font-semibold tracking-tight first:mt-0">
        D.A.R.T. Formations
      </h2>
      <div className=" flex flex-col text-white justify-center w-2/4">
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

      <div className="w-full h-[600px] p-6 z-10">
        <DARTPosition />
      </div>

      <WeaponPosition/>
        
      <h2 className="scroll-m-20 text-white text-center pb-2 pt-12 text-3xl font-semibold tracking-tight first:mt-0">
            D.A.R.T Movement
      </h2>
      <div className="w-full h-[600px] p-6 z-10">
        <DARTmovement />
      </div>
    </div>
  );
}

// Description Card Component
function FormationCard({ title, points }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</AccordionTrigger>
        <AccordionContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
