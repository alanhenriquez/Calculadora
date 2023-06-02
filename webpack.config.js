const path = require('path');
	
	module.exports = {
	  mode: 'development',
	  entry: './index.js',
	  output: {
	    filename: 'bundle.js',
	    path: path.resolve(__dirname, 'dist'),
	  },
	  module: {
	    rules: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['@babel/preset-env'],
	          },
	        },
	      },
	    ],
	  },
	  devServer: {
	    static: {
	      directory: path.resolve(__dirname, 'dist'),
	    },
	    hot: true,
	    historyApiFallback: true,
	  },
	  stats: 'errors-only',
	};