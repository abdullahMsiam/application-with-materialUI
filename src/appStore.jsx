import { create } from 'zustand'

// const useBearStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//   }))

const myStore = create((set) => ({
    sum: false,
    updateSum: () => set((state) => ({ sum: state.sum + 1 })),

}))

export const useAppStore = create(myStore);