import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  
  server: {
    host: '0.0.0.0',  // Ensure the server is accessible externally
    port: 5173,        // Change port if necessary
  },
})
