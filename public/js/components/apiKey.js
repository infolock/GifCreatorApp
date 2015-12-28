const _ = require( 'underscore' );
const $ = require( 'jquery' );
const React = require( 'react' );

const GifLayerConfig = require( 'config/giflayer' );
const APIKeyStore = require( 'stores/apiKey' );
const APIKeyActions = require( 'actions/apiKey' );

class APIKey extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            apiKey: APIKeyStore.get()
        };
    }

    request( targetUrl = '', options = {} ) {
        let settings = _.extend( {}, GifLayerConfig.REQUEST_DEFAULTS, options );
        let payload = _.pick( settings, _.keys( GifLayerConfig.REQUEST_DEFAULTS ) );
        let gifLayerRequestUrl = GifLayerConfig.URL + '?' + $.param( payload );

        $( this.refs.animatedGif.getDOMNode() ).attr( 'src', gifLayerRequestUrl );
    }

    didChangeAPIKey( e ) {
        this.request({
            api_key: e.target.value
        });
    }

    render() {
        return (
            <div className="gif-creator-api-key">
                <span>Please Enter the GifLayer API Key to use...</span>
                <input type="text"
                    name="api_key"
                    id="api_key"
                    onChange={ this.didChangeAPIKey.bind( this ) }
                    />
                <img src="#" ref="animatedGif" />
            </div>
        );
    }
}

module.exports = APIKey;
