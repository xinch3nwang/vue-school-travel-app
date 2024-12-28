import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),  // 通过 resolve.alias 配置路径别名(使用 @ 代替 ./src)
    },
  },
  plugins: [vue()],
});