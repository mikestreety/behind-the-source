module.exports = function (text, amount) {
	text = text.replace(/&nbsp;/g, ' ');
	text = text.replace(/(<([^>]+)>)/gi, "");
	text = text.split(' ');
	if(amount && text.length > amount) {
		text = text.slice(0, amount);
		text.push('...');
	}
	text = text.join(' ');
	return text;
};
