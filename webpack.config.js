module.exports = {
    mode: 'development',
    entry: "./js/app.js",
    output: {
      filename: "dist/bundle.js"
    }, 
    watch: true,
    module: {
      // rules: [
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     loader: 'jshint-loader',
      //   }
      // ],
      // rules: [
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     loader: 'babel-loader',
      //     query: {
      //       presets: ['react', 'es2015'] 
      //     }
      //   }
      // ]
    },
    resolve: {
      extensions: ['.js', '.es6'],
    },
  }