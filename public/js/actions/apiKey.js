const appDispatcher = require( 'dispatcher/appDispatcher' );
const EVENT_CONST = require( 'constants/eventConst' );

const APIKeyActions = {
    setAPIKey: function( apiKey ) {
        appDispatcher.handleAction({
            actionType: EVENT_CONST.SET_API_KEY,
            apiKey: apiKey
        });
    }
};

module.exports = APIKeyActions;
