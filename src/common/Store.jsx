import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const themeStore = create(persist(
    (set) => ({
        theme: "light",
        accessToken:"",
        refreshToke:"",
        toggle: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
        addAccessToken:(token) => set((state) => ({ accessToken:token})),
        addRefreshToken:(token) => set((state) => ({ refreshtoken:token}))
    })
))