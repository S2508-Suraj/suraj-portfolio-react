import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLE_FILE=1 npm run build  -> bundles everything into one dist/index.html
const singleFile = process.env.SINGLE_FILE === '1'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), ...(singleFile ? [viteSingleFile()] : [])],
})
