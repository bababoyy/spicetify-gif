(function extension(spicetify) {
	const { Platform } = Spicetify;
	if (!Platform) {
		setTimeout(extension, 300);
		return;
	}
	const el = document.createElement('img');
	el.src = 'https://files.catbox.moe/p038r2.gif';
	el.style = 'position:absolute;margin-left:-8em;bottom:.5em';
	document.querySelector('.main-nowPlayingBar-center')
		.append(el);
})()
