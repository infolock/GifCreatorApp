const React = require( 'react' );
const Router = require( 'react-router' );

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

const GifCreatorApp = require( '../app' );
const LandingPage = require( '../landingPage' );

const GifCreatorRoutes = (
    <Route name="gifcreator" path="/" handler={ GifCreatorApp }>
		<DefaultRoute handler={ LandingPage } />
	</Route>
);

module.exports = GifCreatorRoutes;
