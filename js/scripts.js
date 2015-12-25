function jumpTo()
{
	var offset = document.getElementById("main-nav").offsetHeight - 2;
	setTimeout(function()
	{
		window.scrollBy(0, -offset);
	}, 100);
}