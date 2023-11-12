/** @type {import('tailwindcss').Config} */
export default {
    content: ["components/**/*.{vue,js}", "layouts/**/*.vue", "pages/**/*.vue"],
    theme: {
        extend: {},
    },
    theme: {
        extend: {},
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
