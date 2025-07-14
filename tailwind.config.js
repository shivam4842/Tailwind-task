 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./*.{html,js}"],
   theme: {
     extend: {
        colors:{
          'primary': '#C9E1E3',
          'secondary': '#183045',
          'secondary-focus': '#3E698C',
        },
        fontFamily: {
          alice: ['Alice', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
     },
   },
   plugins: [],
 }