module.exports = function (config) {

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
