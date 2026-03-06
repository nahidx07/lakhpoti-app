import { create } from 'zustand';

export const useStore = create((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  setBalance: (amount) => set((state) => ({ user: { ...state.user, balance: amount } })),
}));
