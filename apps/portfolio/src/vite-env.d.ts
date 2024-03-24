/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BACKEND_URL: string;
  readonly VITE_APP_ENVIRONMENT: string;
  readonly VITE_APP_CONTENT_FULL_SPACE_ID: string;
  readonly VITE_APP_CONTENT_FULL_ACCESS_TOKEN: string;
  readonly VITE_APP_ASSET_ID_CV: string;
  readonly VITE_APP_ASSET_ID_PROFILE_PICTURE: string;
  readonly VITE_APP_ASSET_ID_BACKGROUND: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
