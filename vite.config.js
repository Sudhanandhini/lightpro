import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/lightpro/',
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:3000' }
  },
  build: {
    outDir: 'dist',
    target: 'es2019',
    cssCodeSplit: true,
    // Keep React in its own long-cached file so content edits don't force re-downloading it
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks: id => (id.includes('node_modules') ? 'vendor' : undefined)
      }
    }
  }
}))
