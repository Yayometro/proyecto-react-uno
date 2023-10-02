const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js', // Punto de entrada de tu aplicación React
    output: {
      filename: 'bundle.js', // Nombre del archivo de salida
      path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
  module: {
    rules: [
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
        },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Carga archivos CSS
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9001,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
    })
  ]
};