import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//Imported tailwindcss plugin to use tailwindcss in vite config file
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  //Using the tailwindcss plugin in vite config file to enable tailwindcss features
  plugins: [react(), tailwindcss()], 
})
