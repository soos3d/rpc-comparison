/// <reference types="vite/client" />

interface ImportMetaEnv {
  [x: string]: any;
  readonly VITE_ALCHEMY_ID: string;
  readonly VITE_INFURA_ID: string;
  readonly VITE_CHAINSTACK: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
