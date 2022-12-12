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
            fontFamily: {
                Josefin: ['Josefin Sans', 'sans-serif'],
            },
            fontSize: {
                4: '4rem',
            },
            container: {
                margin: '300px 0',
                padding: '10rem 0',
                center: true,
            },
            backgroundImage: {
                'main-background': 'url("./assets/imgs/back2.webp")',
                agro1: 'url("./assets/imgs/agro1.svg")',
                agro2: 'url("./assets/imgs/agro2.svg")',
                agro3: 'url("./assets/imgs/agro3.svg")',
                back3: 'url("./assets/imgs/back3.webp")',
                back4: 'url("./assets/imgs/back4.webp")',
                back5: 'url("./assets/imgs/back5.webp")',
            },
            backgroundSize: {
                4: '4rem',
            },
            spacing: {
                13: '52px',
                26: '109px',
                27: '119px'
            },
            borderRadius: {
                30: '30px',
                150: '250px',
            },
            color: {
                primary: 'rgba(63, 61, 86, 0.5)',
            },
            borderColor: {
                primary: 'rgba(63, 61, 86, 0.5)',
            },
            backgroundColor: {
                primary: '#000000',
                secondary: 'rgba(49, 20, 54, 0.5)',
                tertiary: 'rgb(108, 99, 255)',
                quaternary: 'rgb(63, 61, 86)',
                fifth: 'rgb(49, 20, 54)',
                sixth: '#1E293B',
            },
            height: {
                1200: '1200px',
                1000: '1000px',
                800: '800px',
                600: '600px',
                500: '500px',
                400: '400px',
                300: '300px',
                200: '200px',
            },
            width: {
                500: '500px',
                450: '450px',
                400: '400px',
                300: '300px',
                250: '250px',
                200: '200px',
                170: '170px',
            },
            margin: {
                1200: '1200px',
                1000: '1000px',
                800: '800px',
                700: '700px',
                500: '500px',
                300: '300px',
                200: '200px',
                150: '150px',
                100: '100px',
                10: '20px',
                20: '40px',
                30: '60px',
                40: '80px',
            },
        },
    },
    plugins: [],
}
