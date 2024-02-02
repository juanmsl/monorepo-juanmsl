import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: "Juanmsl | Portfolio",
        short_name: "Juanmsl Portfolio",
        description: "Hello, I'm a Fullstack web developer and Infrastructure engineer, I love design and create things to innovate and inspirate people. Know me visiting my portfolio.",
        scope: "/",
        id: "/",
        start_url: "/",
        orientation: "portrait",
        display: "fullscreen",
        display_override: ["window-controls-overlay"],
        theme_color: "#000000",
        background_color: "#000000",
        icons: [
          {
            src: "/manifest/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-284x284.png",
            sizes: "284x284",
            type: "image/png"
          },
          {
            src: "/manifest/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        shortcuts: []
      }
    }),
  ],
  resolve: {
    alias: {
      "@core": "/src/core",
      "@assets": "/src/assets",
      "@helpers": "/src/helpers",
      "@application": "/src/context/application",
      "@domain": "/src/context/domain",
      "@infrastructure": "/src/context/infrastructure",
      "@components": "/src/react/components",
      "@contexts": "/src/react/contexts",
      "@features": "/src/react/features",
      "@hooks": "/src/react/hooks",
      "@router": "/src/react/router",
    },
  },
});
