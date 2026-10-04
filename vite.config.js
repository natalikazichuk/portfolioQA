import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths valid on GitHub Pages under /<repo>/
export default defineConfig({ base: './', plugins: [react()] });
