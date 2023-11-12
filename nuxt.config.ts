// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["./modules/altCraft/module"],
    altCraft: {
        modelName: process.env.MODEL_NAME,
        accessToken: process.env.ACCESS_TOKEN,
        prompt: `What's in this image?`,
        serveFrom: "https://localhost:3000",
        createGitIgnore: true,
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devtools: { enabled: true },
});
