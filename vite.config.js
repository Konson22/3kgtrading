import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        extensions: ['.jsx', '.tsx', '.ts', '.js', '.mjs', '.mts', '.json'],
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx',
                'resources/js/guest.tsx',
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
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    motion: ['framer-motion'],
                    swiper: ['swiper'],
                },
            },
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        host: '3kgtrading.com',
        port: 3000,
        strictPort: true,
    },
});
