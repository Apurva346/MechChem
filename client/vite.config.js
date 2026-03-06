import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Jar plugin vaprat asal tar

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
})

