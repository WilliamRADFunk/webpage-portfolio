function jumpTo(coords)
{
	var offset = (coords !== null && coords !== undefined) ? coords : document.getElementById("main-nav").offsetHeight - 2;
	setTimeout(function()
	{
		if(window.innerWidth > 767) window.scrollBy(0, -offset);
		else
		{
			var hamburgerOffset = (coords !== null && coords !== undefined) ? 0 : document.getElementById("hamburger-nav").offsetHeight;
			window.scrollBy(0, -(offset - hamburgerOffset - 16));
		}
	}, 0);
}
function setPanelToTop(elem)
{
	setTimeout(function()
	{
		var offset = document.getElementById(elem).getBoundingClientRect();
		window.scrollBy(0, offset.top);
		jumpTo();
	}, 400);
}