// const _ = require( 'underscore' );
const crypto = require( 'crypto' );

/**
 * Public Key
 * Hash Value: iReaction ( sha-1 )
 * Change this to whatever you want - or don't - its your world...
 */
// const PUBLIC_KEY = '1fe6f440d9b19375c4715e95fe5b02631ef52cd2';

// SHA256 Max length
const hashLength = 32;
const hashLengthOffset = Math.pow( 2, 32 ) - 1;

const ALG = {
    'SHA1': 'sha1',
    'SHA256': 'sha256'
};

const HEX = 'hex';

let invalidStringBufferMessage = ( val, name ) => {
    if( typeof val !== 'string' || !Buffer.isBuffer( val ) ) {
        return name + ' must be a string or buffer!';
    }
};

let checkForError = ( derivedKeyByteLength, key, salt ) => {
    if( derivedKeyByteLength > ( hashLengthOffset * hashLength ) ) {
        return 'requested key length too long';
    }

    return invalidStringBufferMessage( key, 'key' ) || invalidStringBufferMessage( salt, 'salt' );
};

const NONCE = {
    MAX_LENGTH: 15,
    CHARS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    TOTAL_CHARS: 62
};

const DEFAULT_CHALLENGE_OPTIONS = {
    clientId: 0,
    apiKey: '',
    nonce: 0,
    hmacSignature: ''
};

class Auth {
    // challenge( clientId, privateKey ) {
        // let { clientId, apiKey, nonce, hmacSignature } = _.extend( {}, DEFAULT_CHALLENGE_OPTIONS, options );
    // },

    generateNonce() {
        var nonceKeys = [];

        for( let i = 0; i < NONCE.MAX_LENGTH; i++ ) {
            nonceKeys.push( NONCE.CHARS.charAt( Math.floor( Math.random() * NONCE.TOTAL_CHARS ) ) );
        }

        return nonceKeys.join( '' );
    }

    generatePBKDF2( key, salt, iterationCount = 1, derivedKeyByteLength = 64, alg = ALG.SHA256 ) {
        const errorMessage = checkForError( derivedKeyByteLength, key, salt );

        if( errorMessage ) {
            console.log( errorMessage );

            return false;
        }

        let DerivedKeyBuffer  = new Buffer( derivedKeyByteLength );
        let HLBuffer   = new Buffer( hashLength );
        let SaltBuffer = new Buffer( salt.length + 4 );
        let khLength = Math.ceil( derivedKeyByteLength / hashLength );
        let khOffset = derivedKeyByteLength - ( khLength - 1 ) * hashLength;
        let hmac = '';
        let destinationPosition = 0;
        let resultLength = 0;

        salt.copy( SaltBuffer, 0, 0, salt.length );

        for( let i = 1; i <= khLength; i++ ) {
            SaltBuffer.writeUInt32BE( i, salt.length );

            hmac = crypto.createHmac( alg, key ).update( SaltBuffer ).digest();
            hmac.copy( HLBuffer, 0, 0, hashLength );

            for( let j = 1; j < iterationCount; j++ ) {
                hmac = crypto.createHmac( alg, key ).update( hmac ).digest();

                for( let k = 0; k < hashLength; k++ ) {
                    HLBuffer[k] ^= hmac[k];
                }
            }

            destinationPosition = ( i - 1 ) * hashLength;
            resultLength = ( i == khLength ? khOffset : hashLength );

            HLBuffer.copy( DerivedKeyBuffer, destinationPosition, 0, resultLength );
        }

        return DerivedKeyBuffer.toString( HEX );
    }
}

module.exports = Auth;
