var webpack = require( 'webpack' );

var config = {
	entry: {
		test: './entry.js',
		vendor: ['jquery', 'underscore', 'moment', 'bootstrap', 'react']
	},
	devtool: 'eval',
	output: {
		path: __dirname,
		publicPath: '/',
		filename: '../public/dist/dist.bundle.js'
	},
	module: {
		loaders: [
			{
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components|public\/js\/lib)/,
                query: {
                    compact: false
                }
            }
		]
	},
	stats: {
		colors: true,
		modules: true,
		reasons: true
	},
	resolve: {
		alias: {
			base64: 'base64js/dist/base64-amd',
			json2: 'json2/json2',
			draggable: 'jquery-ui/ui/draggable',
			droppable: 'jquery-ui/ui/droppable',
			postmonger: 'postmonger/postmonger',
			'react-bootstrap/lib/modal': 'react-boostrap/lib/Modal',
			'react-bootstrap/lib/button': 'react-boostrap/lib/Button',
			'react-bootstrap/lib/alert': 'react-boostrap/lib/Alert',
			'react-bootstrap/lib/panelGroup': 'react-boostrap/lib/PanelGroup',
			'react-bootstrap/lib/panel': 'react-boostrap/lib/Panel',
			'react-bootstrap/lib/well': 'react-boostrap/lib/Well',
			'react-bootstrap/lib/modalTrigger': 'react-boostrap/lib/ModalTrigger',
			'react-bootstrap/lib/popover': 'react-boostrap/lib/Popover',
			'react-bootstrap/lib/input': 'react-boostrap/lib/Input',
			'react-bootstrap/lib/overlayTrigger': 'react-boostrap/lib/OverlayTrigger',
		},
		modulesDirectories: ['node_modules', 'bower_components', 'public/js']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin( 'vendor', '../public/dist/vendor.bundle.js' ),
		new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
		new webpack.optimize.DedupePlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			moment: 'moment',
			underscore: 'underscore',
			boostrap: 'bootstrap',
			react: 'react',
			i18n: 'i18n'
		})
	]
};

module.exports = config;
