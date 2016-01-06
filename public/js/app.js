const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const Auth = require( './auth' );

class GifCreatorApp extends React.Component {
	render() {
        console.log( Auth.generatePBKDF2( '123', '456' ) );
		return (
			<div className="gifcreator">
				<RouteHandler />
			</div>
		);
	}
}

GifCreatorApp.contextTypes = {
	router: React.PropTypes.func.isRequired
};

module.exports = GifCreatorApp;
