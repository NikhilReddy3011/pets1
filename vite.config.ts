import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/pets1", // <- comma was missing here
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
