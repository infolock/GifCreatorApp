const API_KEY = '7c0d8aa417c6255d3a17c3ee457099b2';

const GiflayerConfig = {
    URL: 'http://apilayer.net/api/capture',
    REQUEST_DEFAULTS: {
        access_key: API_KEY,
        url: 'https://www.youtube.com/watch?v=3W6hZR29l5o', // Default
        // url: 'https://www.youtube.com/watch?v=hglVqACd1C8', // Tool (Sober)
        start: 0,
        end: 5,
        duration: '',
        size: '300x200',
        crop: '',
        fps: 10,
        trailer: ''
    }
};

module.exports = GiflayerConfig;
