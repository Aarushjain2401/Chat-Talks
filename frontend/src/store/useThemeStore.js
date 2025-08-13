import {create} from 'zustand'

export const useThemeStore = create((set)=>({
   theme: localStorage.getItem("chatTalks-theme") || "forest",
   setTheme: (theme) => {
    localStorage.setItem("chatTalks-theme",theme)
    set({theme})
   }
}))