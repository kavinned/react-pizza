/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Inter', 'system-ui', 'sans-serif'],
                secondary: ['Montserrat', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
    // corePlugins: {
    // 	preflight: false,
    // },
};
