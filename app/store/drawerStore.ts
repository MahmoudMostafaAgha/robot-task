import { create } from "zustand";


interface DrawerStore {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
}
  
export const useDrawerStore = create<DrawerStore>((set) => ({
    isDrawerOpen: false,
    toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
    closeDrawer: () => set({ isDrawerOpen: false }),
  }));