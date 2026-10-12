module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        snapYellow: '#FFFC00',
        snapBlack: '#111111',
        snapGray: '#F5F5F5',
        snapMuted: '#767676'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17,17,17,0.08)'
      }
    }
  },
  plugins: []
};
