/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C5A57D',
                secondary: '#42000B',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {

                navbar: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'hero-content': {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },

                'slide-in': {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
            animation: {
                navbar: 'navbar 1s ease forwards',
                'navbar-delayed': 'navbar 0.5s ease forwards 1s',
                'hero-content': 'hero-content 1s ease forwards',
                'slide-in': 'slide-in 0.5s ease forwards',
            },
            boxShadow: {
                btn: '4px 4px 5px rgba(66, 0, 11, 1), 8px 8px 10px rgba(197, 165, 125, 1), 10px_10px_15px_rgba(197, 165, 125, 1)',
            }
        },
    },
    plugins: [],
    darkMode: 'class',
}
