const path = require('path');
const includePath = path.resolve(__dirname, '..');



module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: includePath,
        use: [
          // Loader for webpack to process CSS with PostCSS
          {
            loader: 'postcss-loader',
            options: {
              /*
                Enable Source Maps
               */
              sourceMap: true,
              /*
                Set postcss.config.js config path && ctx
               */
              config: {
                path: './.storybook/',
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: includePath,
        use: 'url-loader'
      }
    ],
  },
};
