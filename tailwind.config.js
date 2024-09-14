/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                'brand': {
                    DEFAULT: '#6B3089',
                    50: '#F0EAF3',
                    100: '#CCA5E0',
                    200: '#BB87D5',
                    300: '#AA69CA',
                    400: '#984BC0',
                    500: '#833BA7',
                    600: '#6B3089',
                    700: '#4B215F',
                    800: '#2A1336',
                    900: '#0A040C',
                    950: '#000000'
                },
                'primary': {
                    DEFAULT: '#4A42C8',
                    50: '#F0F0FB',
                    100: '#E1E0F6',
                    200: '#C3C0ED',
                    300: '#A5A1E4',
                    400: '#8781DA',
                    500: '#6862D1',
                    600: '#4A42C8',
                    700: '#362FA3',
                    800: '#282377',
                    900: '#19164C',
                    950: '#121036'
                },
            },
            fontFamily: {
                display: ['Rubik', 'sans-serif'],
                serif: ['Rubik', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

