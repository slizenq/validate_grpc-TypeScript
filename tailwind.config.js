/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./*.{vue,js,ts,jsx,tsx}",
        "./public/**/*.{vue,js,ts,jsx,tsx}",
        "./server/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                text_1: "#181818",
                text_2: "#ffffff",
                placeholder: "8c8c8c",
                text__error: "#FF2D00",
                text__support: "#4E66FF",
                main__accent_1: "#002BCF",
                main__accent_2: "#F54925",
                secondary02: "#CE654E",
            },
            dropShadow: {
                btn: "0px 7px 0px rgba(0, 0, 0, 1)",
                hover: "0px 7px 0px rgba(140, 140, 140, 1)",
            },
        },
    },
    plugins: [],
};
