const { resolve } = require('path');
const webpack = require('webpack');
const path = require('path');

const port = process.env.port || 8080;

module.exports = {
	context: resolve(__dirname, 'src'),
	cache: true,
	watch: true,
	resolve: {
    extensions: ['.js', '.jsx']
  },
	devtool: 'inline-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?quiet=true',
		'./index.js'
	],
	output: {
		path: resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: resolve(__dirname, 'public'),
		port: port,
		inline: true,
		hot: true,
		compress: true,
		open: true,
		stats: "errors-only"
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),

		new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
        use: [ 'babel-loader'],
        exclude: /node_modules/,
				include: path.join(__dirname, 'src')
			},{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
				use: 'url?limit=50000'
			}
		]
	}
};