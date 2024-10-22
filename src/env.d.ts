/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly FLUX_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
