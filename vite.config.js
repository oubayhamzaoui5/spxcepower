import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/spxcepower/', // Add this line to specify the subdirectory
  plugins: [react()],
})
