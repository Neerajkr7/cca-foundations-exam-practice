import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'cca-foundations-exam' to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/cca-foundations-exam/',
})
