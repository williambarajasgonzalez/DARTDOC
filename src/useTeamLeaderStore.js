import { create } from "zustand";
import { produce } from "immer";

export const useTeamLeaderStore = create((set,get) => ({
    position: "Line",
    setPosition: (pos) => {
        set(produce(state => {
            state.position = pos
        }))
    }
}))