/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'fasika-green': '#1b4332',
                'fasika-light-green': '#2d6a4f',
            }
        },
    },
    plugins: [],
}
