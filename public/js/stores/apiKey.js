const _ = require( 'underscore' );
const events = require( 'events' );
const appDispatcher = require( 'dispatcher/appDispatcher' );
const EVENT_CONST = require( 'constants/eventConst' );

let APIKey = '';

const APIKeyStore = _.extend( {}, events.prototype, {
    addChangeListener: function( cb ) {
        this.addListener( EVENT_CONST.CHANGE, cb );
    },

    removeChangeListener: function( cb ) {
        this.removeListener( EVENT_CONST.CHANGE, cb );
    },

    get: function() {
        return APIKey;
    }
});

appDispatcher.register( ( payload ) => {
    let action = payload.action;

    switch( action.actionType ) {
        EVENT_CONST.SET_API_KEY:
            if( APIKey === action.apiKey ) {
                return true;
            }

            APIKey = action.apiKey;
            APIKeyStore.emit( EVENT_CONST.CHANGE );
        break;

        default:
            return true;
    }
});

module.exports = APIKeyStore;
