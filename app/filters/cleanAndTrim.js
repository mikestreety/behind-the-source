module.exports = function (text) {
    text = text.replace(/&nbsp;/g, ' ');
    text = text.replace(/(<([^>]+)>)/gi, "");
    text = text.split(' ');
    text = text.slice(0, 50);
    text = text.join(' ');
    return text;
};