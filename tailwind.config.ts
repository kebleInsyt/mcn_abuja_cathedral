import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'donate-pattern':
          "linear-gradient(45deg, #000000c9, #000000c7), url('/app/images/slide-2.jpg')",
      },
      fontFamily: {
        damion: ['Damion', 'cursive'],
        OpenSans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
