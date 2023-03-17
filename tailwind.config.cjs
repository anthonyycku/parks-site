/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"], theme: {
        extend: {
            animation: {
                'fadeIn-1s': 'fadeIn 1s forwards',
                'fadeIn-1.5s': 'fadeIn 1.5s forwards',
                'fadeIn-2s': 'fadeIn 2s forwards',
                'fadeIn-2.5s': 'fadeIn 2.5s forwards',
                'fadeIn-3s': 'fadeIn 3s forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(2rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            colors: {
                hoverColor: '#99f6e4'
            }
        },
    }, plugins: [],
}
