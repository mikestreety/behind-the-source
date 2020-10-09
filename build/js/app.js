document.querySelector('.hasChildren a').addEventListener('click', function(event) {
	event.preventDefault();
	this.classList.toggle('selected');
});