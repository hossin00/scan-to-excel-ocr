import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/scan-to-excel-ocr/',
  build: { outDir: 'dist' }
})
