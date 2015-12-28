const React = require( 'react' );
const APIKey = require( './apiKey' );

class Main extends React.Component {
    render() {
        return (
            <main>
                <APIKey />
            </main>
        );
    }
}

module.exports = Main;
