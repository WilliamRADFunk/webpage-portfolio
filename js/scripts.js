function jumpTo(coords)
{
	var offset = (coords !== null && coords !== undefined) ? coords : document.getElementById("main-nav").offsetHeight - 2;
	setTimeout(function()
	{
		if(window.innerWidth > 767)
		{
			window.scrollBy(0, -offset);
		}
		else
		{
			var hamburgerOffset = (coords !== null && coords !== undefined) ? 0 : document.getElementById("hamburger-nav").offsetHeight;
			window.scrollBy(0, -(offset - hamburgerOffset - 16));
		}
	}, 100);
}
function setPanelToTop(elem)
{
	var panel = document.getElementById(elem);
	var position = panel.getBoundingClientRect();
	console.log(position.top);
	setTimeout(function()
	{
		console.log("Page Top Before: " + document.body.scrollTop);
		document.body.scrollTop = panel.scrollTop;
		console.log("Page Top After: " + document.body.scrollTop);
	}, 100);
}