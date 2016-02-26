function jumpTo(coords)
{
	var offset = (coords !== null && coords !== undefined) ? coords : document.getElementById('main-nav').offsetHeight - 2;
	setTimeout(function()
	{
		if(window.innerWidth > 767) window.scrollBy(0, -offset);
		else
		{
			var hamburgerOffset = (coords !== null && coords !== undefined) ? 0 : document.getElementById('hamburger-nav').offsetHeight;
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
function changeActiveListElem(elem)
{
	// Clear old category from page.
	document.getElementById('myProjects').innerHTML = '';
	// Switch active class to clicked tab.
	var listHolder = document.getElementById('project-categories');
	var children = listHolder.children;
	for(var i = 0; i < children.length; i++)
	{
		children[i].classList.remove('active');
	}
	children[elem].classList.add('active');
	if(elem < children.length-2) fillCategory(children[elem].children[0].innerHTML.toLowerCase());
}
function fillCategory(cat)
{
	var elem = document.getElementById('myProjects');
	for(var i = 1; i < Object.keys(categories[cat]).length; i++) elem.innerHTML += categories[cat].key(i);
}
function init()
{
	var elem = document.getElementById('myProjects');
	fillCategory('games');
}