const React = require( 'react' );
const Router = require( 'react-router' );

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

const GifCreatorApp = require( '../app' );
const Main = require( '../components/main' );

const GifCreatorRoutes = (
    <Route name="gifcreator" path="/" handler={ GifCreatorApp }>
		<DefaultRoute handler={ Main } />
	</Route>
);

module.exports = GifCreatorRoutes;
