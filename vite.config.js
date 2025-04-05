import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: [
    '**/*.doc',
    '**/*.docx',
    '**/*.pdf',
    '**/*.xls',
    '**/*.xlsx',
    '**/*.csv',
    '**/*.txt',
    '**/*.mp3',
    '**/*.wav',
    '**/*.mp4',
    '**/*.mov',
    '**/*.avi',
    '**/*.zip',
    '**/*.rar',
    '**/*.7z',
    '**/*.ppt',
    '**/*.pptx',
    '**/*.json'
  ]
})
