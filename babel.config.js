module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-class-properties']
  };
}

