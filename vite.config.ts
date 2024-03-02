import { defineConfig } from 'vite';

import unocss from 'unocss/vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), unocss()],
  build: {
    minify: "terser",
    terserOptions: {
      parse: { html5_comments: false },
      compress: { drop_console: true },
      format: { comments: false },
    },
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
});
