module.exports = {
  devServer: {
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
      },
    },
  },
  productionSourceMap: false,
};
