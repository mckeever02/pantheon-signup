module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#6BE449',
        'almost-black': '#0D0C0F'
      },
      fontFamily: {
        'display': ['"NaN Tragedy"', 'ui-serif'],
        'body': ['"NaN Fiasco"', 'ui-sans-serif'],
      },
      fontSize: {
        '2xs': '.5rem'
      }
    }
  },
  variants: {
    extend: {
     //borderOpacity: ['active'],
    }
  }
};
