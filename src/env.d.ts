/// <reference types="astro/client" />

// The variable-font package is a side-effect CSS import with no bundled types.
// It resolves fine at build (Vite) — this just satisfies `astro check`.
declare module '@fontsource-variable/fraunces';
