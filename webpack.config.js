const { resolve } = require('path');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const babelSettings = JSON.parse(fs.readFileSync(".babelrc"))

if (! process.env.NODE_ENV) {
	console.error('Oopz! Variable "NODE_ENV" not found!');

	return false;
}

const __SRC__ 			 = resolve(__dirname, 'src');
const __PRODUCTION__ = process.env.NODE_ENV === 'production';
const __DEV__        = ! __PRODUCTION__;
const __API_URL__ = process.env.API_URL || 'http://localhost';
const __PORT__ 		= process.env.PORT || 8080;

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
		new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				PORT: JSON.stringify(__PORT__),
				API_URL: JSON.stringify(__API_URL__)
      }
    }),

		new webpack.optimize.OccurrenceOrderPlugin(),
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

if (__PRODUCTION__) {
	config.entry.push(
		'./index.js'
	);
	config.plugins.push(
		new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		})
	);

	babelSettings.plugins.push('transform-react-inline-elements');
  babelSettings.plugins.push('transform-react-constant-elements');
}

if (__DEV__) {
	config.devtool = 'cheap-module-source-map';
	config.devServer = {
		contentBase: resolve(__dirname, 'public'),
		port: __PORT__,
		inline: true,
		hot: true,
		compress: true,
		open: true,
		stats: 'errors-only'
	};
	config.entry.push(
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?quiet=true',
		'./index.js'
	);
	config.plugins.push(
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	);
};

module.exports = config;