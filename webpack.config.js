const { resolve, join } = require('path')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const babelSettings = JSON.parse(fs.readFileSync(".babelrc"))

if (!process.env.NODE_ENV) {
	console.error('Oopz! Variable "NODE_ENV" not found!')

	return false
}

if (!process.env.API_URL) {
	console.error('Oopz! Variable "API_URL" not found!')

	return false
}

const __SRC__ 				= resolve(__dirname, 'src')
const __PRODUCTION__ 	= process.env.NODE_ENV === 'production'
const __DEVELOPMENT__ = ! __PRODUCTION__
const __API_URL__ 		= process.env.API_URL
const __PORT__ 				= process.env.PORT || 8080

const config = {
	context: __SRC__,
	cache: true,
	watch: true,
	resolve: {
		extensions: ['.js', '.jsx']
	},
	entry: [],
	output: {
		path: resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: process.env.NODE_ENV,
			PORT: __PORT__,
			API_URL: __API_URL__
		}),

		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin('styles.css')
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
				include: join(__dirname, 'src')
			},{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
				use: 'file-loader'
			}
		]
	}
}

if (__DEVELOPMENT__) {
	module.exports = require('./webpack.development')(webpack, config, __PORT__)
}

if (__PRODUCTION__) {
	module.exports = require('./webpack.production')(webpack, config)
}