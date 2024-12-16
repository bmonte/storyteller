import { create } from 'zustand';

type Store = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const useMenuStore = create<Store>((set) => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}));
