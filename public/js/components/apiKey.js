const React = require( 'react' );

const APIKeyStore = require( 'stores/apiKey' );
const APIKeyActions = require( 'actions/apiKey' );

class APIKey extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            apiKey: APIKeyStore.get()
        };
    }

    didChangeAPIKey( e ) {
        if( APIKeyStore.get() !== e.target.value ) {
            APIKeyActions.setAPIKey( e.target.value );
        }
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
            </div>
        );
    }
}

module.exports = APIKey;
