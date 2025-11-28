import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { resolve } from 'path'


export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  return {
    plugins: [basicSsl()],
    server: {
      host: true,
      open: true, // abre el navegador
    },
    base: isDev ? './' : '/AppMindAr/', // ✅ rutas correctas para ambos entornos
    build: {
      outDir: 'docs',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          minas: resolve(__dirname, 'minas.html'),
          elements: resolve(__dirname, 'elements.html'),
          scanner: resolve(__dirname, 'scanner.html'),
          bio: resolve(__dirname, 'bio.html'),
          'dino-scanner': resolve(__dirname, 'dino-scanner.html'),
          'arjs-scanner': resolve(__dirname, 'arjs-scanner.html'),     
          'bio-scanner': resolve(__dirname, 'bio-scanner.html'),
          'bio-elements': resolve(__dirname, 'bio-elements.html'),

        },
      },
    },
  }
})
