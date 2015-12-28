var React = require( 'react' );
var Router = require( 'react-router' );

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var TransitionTo = Router.transitionTo;

var GifCreatorRoutes = require( 'router/router' );

Router.run( GifCreatorRoutes, function( Handler ) {
	var pageEl = document.getElementById( 'page' );
	pageEl.className = '';

	React.render( ( <Handler/> ), pageEl );
});
