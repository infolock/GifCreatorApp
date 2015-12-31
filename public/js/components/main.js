const _ = require( 'underscore' );
const React = require( 'react' );

const APIKeyStore = require( 'stores/apiKey' );
const GifLayerConfig = require( 'config/giflayer' );

const APIKey = require( './apiKey' );
const AnimatedGifImage = require( './animatedGifImage' );

class Main extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            animatedGifImageSrc: ''
        };
    }

    componentDidMount() {
        APIKeyStore.addChangeListener( this.apiKeyDidChange.bind( this ) );
    }

    componentWillUnmount() {
        APIKeyStore.removeChangeListener( this.apiKeyDidChange.bind( this ) );
    }

    apiKeyDidChange() {
        let options = {
            api_key: APIKeyStore.get()
        };

        let params = _.pick( _.extend( {}, GifLayerConfig.REQUEST_DEFAULTS, options ), _.keys( GifLayerConfig.REQUEST_DEFAULTS ) );
        let gifLayerRequestUrl = GifLayerConfig.URL + '?' + $.param( params );

        this.setState({
            animatedGifImageSrc: gifLayerRequestUrl
        });
    }

    render() {
        return (
            <main>
                <APIKey />
                <AnimatedGifImage src={ this.state.animatedGifImageSrc } />
            </main>
        );
    }
}

module.exports = Main;
