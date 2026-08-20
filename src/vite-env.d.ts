/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STATIC_BUILD?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
