import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        // Prefer .jsx over .tsx for extensionless imports (e.g. after renaming a file to .jsx).
        extensions: ['.jsx', '.tsx', '.ts', '.js', '.mjs', '.mts', '.json'],
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx',
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        host: 'localhost',
        port: 3000,
        strictPort: true,
        cors: true,
        origin: 'http://localhost:3000',
    },
});
