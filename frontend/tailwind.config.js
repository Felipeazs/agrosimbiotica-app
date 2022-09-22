/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx}',
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    theme: {
        extend: {
            container: {
                margin: '300px 0',
                center: true,
            },
            backgroundImage: {
                'main-background': 'url("./assets/imgs/back2.png")',
                agro1: 'url("./assets/imgs/agro1.svg")',
                agro2: 'url("./assets/imgs/agro2.svg")',
                agro3: 'url("./assets/imgs/agro3.svg")',
            },
            borderRadius: {
                30: '30px',
            },
            backgroundColor: {
                primary: '#000000',
                secondary: 'rgba(49, 20, 54, 0.5)',
            },
            height: {
                1200: '1200px',
                1000: '1000px',
            },
            margin: {
                1200: '1200px',
                1000: '1000px',
            },
        },
    },
    plugins: [],
}
