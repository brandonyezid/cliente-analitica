// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Añade o verifica esta sección si no existe o no tiene el alias '@'
  resolve: {
    alias: {
      '@': '/src', // Esto mapea '@' a la carpeta 'src'
    },
  },
});