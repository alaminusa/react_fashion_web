/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#FAE3B6',
        'secondaryColor': '#FDBB57',
        'counterColor': '#FEECC8',
        'bestsellingColor': '#CFA485',
      },
      fontSize: {
        'mainHeading': '64px',
        'paraBanner': '22px',
        'counterText': '28px',
      },
      fontFamily: {
        'pop': ["Poppins"],
        'frank': ["Frank Ruhl Libre"],
        'pod': ["Podkova"],
      },
      maxWidth: {
        'container': '1320px',
      }
    },
  },
  plugins: [],
}
