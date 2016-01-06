const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;

class GifCreatorApp extends React.Component {
	render() {
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
