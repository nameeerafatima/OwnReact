// module.exports = {mode: 'development'};
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
    port:3000,
  },
module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          },
        ],
      },

plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]
    };
    

