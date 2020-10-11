module.exports = function (config) {
    config.addFilter('cleanAndTrim', require('./app/filters/cleanAndTrim.js'));
    config.addFilter('isoDate', require('./app/filters/isoDate.js'));
    config.addFilter('readableDate', require('./app/filters/readableDate.js'));
    return {
        dir: {
            input: 'app/content',
            output: 'html',

            data: './../data',
            includes: './../includes',
            layouts: './../layouts'
        }
    };
};
