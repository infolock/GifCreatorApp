const Flux = require( 'flux' );
const appDispatcher = new Flux.Dispatcher();

appDispatcher.handleAction = function( action ) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

module.exports = appDispatcher;
