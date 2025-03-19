import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Sostituisci "TUO_NOME_UTENTE" e "NOME_REPO" con i tuoi dati di GitHub
export default defineConfig({
  plugins: [react()],
  base: '/', // Importante per GitHub Pages
});