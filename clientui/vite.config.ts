import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    server:{
      proxy:{
        '/users': 'http://localhost:3000',
      },
    port:5173,
    strictPort:false
  },
  plugins: [
    react(),
   tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

