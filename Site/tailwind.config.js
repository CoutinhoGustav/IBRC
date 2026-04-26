/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#B8956A',
                'primary-dark': '#96754A',
                'primary-light': '#D4BC96',
                'primary-pale': '#EDE4D4',
                secondary: '#3A0A12',
                'secondary-soft': '#5C1A28',
                cream: '#FAF7F2',
                parchment: '#F3EDE4',
                charcoal: '#2C2420',
                'warm-gray': '#7A7168',
                sage: '#7A8B6F',
            },
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
            keyframes: {
                'fade-up': {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'scroll-hint': {
                    '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
                    '50%': { transform: 'translateY(10px)', opacity: '1' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.8s ease-out forwards',
                'fade-up-delay-1': 'fade-up 0.8s ease-out 0.15s forwards',
                'fade-up-delay-2': 'fade-up 0.8s ease-out 0.3s forwards',
                'fade-up-delay-3': 'fade-up 0.8s ease-out 0.45s forwards',
                'fade-up-delay-4': 'fade-up 0.8s ease-out 0.6s forwards',
                'fade-in': 'fade-in 0.6s ease-out forwards',
                'fade-in-slow': 'fade-in 1.2s ease-out forwards',
                'slide-down': 'slide-down 0.5s ease-out forwards',
                'scale-in': 'scale-in 0.5s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
            },
            boxShadow: {
                'gold': '0 4px 20px rgba(184, 149, 106, 0.15)',
                'gold-lg': '0 8px 40px rgba(184, 149, 106, 0.2)',
                'card': '0 1px 3px rgba(44, 36, 32, 0.06), 0 4px 16px rgba(44, 36, 32, 0.04)',
                'card-hover': '0 4px 12px rgba(44, 36, 32, 0.08), 0 12px 40px rgba(44, 36, 32, 0.06)',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
