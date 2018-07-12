module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: "./app/app.jsx",
  output: {
      path: __dirname +'/public',
      filename: "bundle.js"
  },
  watch: true,
  module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
              options: {
                  presets: ["react", "es2015"]
              }
          }
      }, ]
  },
  // resolve: {
  //     extensions: ['', '.js']
  // },
  // devServer: {
  //     contentBase: path.join(__dirname, 'dist'),
  //     compress: true,
  //     port: 9000
  // }
}