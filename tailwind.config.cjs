/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"], theme: {
        extend: {
            animation: {
                'fadeIn': 'fadeIn 1s forwards',
                'fadeIn-0.5s': 'fadeIn 1s 0.5s forwards',
                'fadeIn-1s': 'fadeIn 1s 1s forwards'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(2rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            colors: {
                hoverColor: '#f2f230',
                primary: '#949398FF',
                secondary: '#F4DF4EFF'
            }
        },
    }, plugins: [],
}
