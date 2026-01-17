import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/RCB/",
  // server: {
  //   allowedHosts: [
  //     // You can add more hosts here if needed
  //   ]
  // }
})
