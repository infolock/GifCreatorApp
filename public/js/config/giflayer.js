const API_KEY = 'f4ac042f8449405137b4645f4fa7db28';

const GiflayerConfig = {
    URL: 'http://apilayer.net/api/capture',
    REQUEST_DEFAULTS: {
        'access_key': API_KEY,
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
