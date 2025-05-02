import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/hiketogether_prototype/',  
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    open: '/hiketogether_prototype/', // direkt dorthin öffnen
  }
})
