import { create } from "zustand";
import { produce } from "immer";
export const useDialogStore = create((set,get) => ({
    role: null,
    setRole: (num) => {
        set(produce(state => {
            state.role = num
        }))
    }
}))