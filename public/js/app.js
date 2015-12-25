const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const GifLayerConfig = require( './config/giflayer' );

const GifLayerDefaults = {
    // Tool (Sober)
    url: 'https://www.youtube.com/watch?v=hglVqACd1C8',
    start: 0,
    end: 4,
    duration: none,
    size: '300x200',
    crop: 'none',
    fps: 15,
    trailer: 'none'
};

class GifCreatorApp extends React.Component {
    request( targetUrl, options ) {
        // let settings = _.extend( {},
        // let requestUrl = GifLayerConfig.URL;
    }

	render() {
		return (
			<div className="gifcreator">
                <div>
                    <span>Please Enter the GifLayer API Key to use...</span>
                    <input type="text" name="api_key" id="api_key" value={ this.state.apiKey } />
                </div>
				<RouteHandler />
			</div>
		);
	}
}

GifCreatorApp.contextTypes = {
	router: React.PropTypes.func.isRequired
};

module.exports = GifCreatorApp;
