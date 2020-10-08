module.exports = function (config) {
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
