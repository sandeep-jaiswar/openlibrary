import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: true,
  external: ["react", "react-dom"],
  outExtension({ format }) {
    return { js: format === "esm" ? ".mjs" : ".cjs" };
  },
});
