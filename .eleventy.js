module.exports = function (config) {
    config.addFilter('readableDate', require('./app/filters/readableDate.js'));
    config.addFilter('cleanAndTrim', require('./app/filters/cleanAndTrim.js'));
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
