/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GOOGLE_ANALYTICS: string;
  readonly VITE_APP_GOOGLE_TAG_MANAGER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
