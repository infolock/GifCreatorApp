const React = require( 'react' );

class AnimatedGifImage extends React.Component {
    static get propTypes() {
        return {
            src: React.PropTypes.string
        };
    }

	render() {
		return (
			<img src={ this.props.src } name="animatedGif" className="animatedGif" />
		);
	}
}

module.exports = AnimatedGifImage;
