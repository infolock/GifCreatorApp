var WPDS = require( 'webpack-dev-server' );
var config = require( 'buildConfigs/webpack' );
var webpack = require( 'webpack' );

var APP_PORT = 3000;

new WPDS( webpack( config ), {
	publicPath: config.output.publicPath,
	hot: true
}).listen( APP_PORT, 'localhost', function( err, result ) {
	if( err ) {
		console.log( err );
	}

	console.log( 'Listening at localhost:' + APP_PORT );
});
