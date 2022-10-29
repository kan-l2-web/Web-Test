let hero = document.querySelector('.hero');

function getValueScroll(arguments) {
	
}

window.addEventListener('scroll', function(e) {
	console.log(hero.PageYOffset);
});

console.log(hero.scrollHeight);