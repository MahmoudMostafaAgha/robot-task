import { create } from "zustand";

type ToggleStore = {
  toggles: Record<string, string>;
  setToggle: (key: string, value: string) => void;
};

export const useToggleStore = create<ToggleStore>((set) => ({
  toggles: {},
  setToggle: (key, value) =>
    set((state) => ({
      toggles: {
        ...state.toggles,
        [key]: value,
      },
    })),
}));
