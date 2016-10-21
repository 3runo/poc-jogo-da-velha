const path = require('path');
const __root = path.join(__dirname, '/..');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-1']
			}
		},
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},
		{
			test: /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader'
		}]
	},
	resolve: {
		alias: {
			style: path.join(__root, '/src/style'),
		},
		extensions: ['', '.js', '.jsx', '.styl']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
}
