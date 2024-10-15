// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@ant-design-vue/nuxt"],
    css: [
        "~/assets/css/tailwind.css", // Путь к вашему основному CSS файлу
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
