import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "@core": path.resolve(__dirname, "./src/modules/core/"),
            "@home": path.resolve(__dirname, "./src/modules/home/"),
            "@auth": path.resolve(__dirname, "./src/modules/auth/"),
            "@todo": path.resolve(__dirname, "./src/modules/todo/"),
        },
    },
})
