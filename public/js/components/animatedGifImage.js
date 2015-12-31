const React = require('react');

class AnimatedGifImage extends React.Component {
	render() {
		return (
			<img src={ this.props.src } name="animatedGif" className="animatedGif" />
		);
	}
}

module.exports = AnimatedGifImage;
