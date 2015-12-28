const React = require( 'react' );

// {"success":false,"error":{"code":910,"type":"failed_generating_gif","info":"Our system failed generating a GIF from the requested URL. Please try again or contact support."}}
class ErrorMessage extends React.Component {
    static get propTypes() {
        return {
            errorMessage: React.PropTypes.string.isRequired,
            errorDetails: React.PropTypes.string
        }
    }

    render() {
        return (
            <div className="error-message">
                <span>ERROR:</span><span>{ this.props.errorMessage }</span>
                <span>Details:</span><span>{ ( this.props.errorDetails || '' ) }</span>
                <div>
                    <a href="#">Retry</a>
                </div>
            </div>
        );
    }
}

module.exports = ErrorMessage;
