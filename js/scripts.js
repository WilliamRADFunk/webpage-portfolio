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
	var carousel = document.getElementById(elem.replace('header', 'carousel'));
	$('#' + elem.replace('header', 'carousel')).carousel('cycle');
}
function changeActiveListElem(value)
{
	// Clear old result from page.
	document.getElementById('myProjects').innerHTML = '';
	fillCategory(value.toLowerCase());
}
function fillCategory(words)
{
	var elem = document.getElementById('myProjects');
	const splitWords = words.split(",").filter(x => x.trim());
	const matches = [];
	for(var i = 0; i < categories.length; i++) {
		const cat = categories[i];
		const tags = cat.tags;
		for (var j = 0; j < splitWords.length; j++) {
			if (tags.includes(splitWords[j])) {
				matches.push(cat);
				break;
			}
		}
	}
	matches.forEach(categ => {
		elem.innerHTML += categ.html;
	});
	if (!matches.length) {
		elem.innerHTML += "<div><h3>There are no applications with tags that match your query.</h3></div>";
	}
}
function init()
{
	fillCategory('game, games');

	var logo = document.getElementById('logo');
	var tagLine = document.getElementById('tagline');
	var pdf = document.getElementById('pdf-logo');
	var git = document.getElementById('git-logo');
	tagLine.style.marginTop = (window.innerWidth > 767) ? ((logo.offsetHeight - 20) + "px") : "15px";
	tagLine.style.marginLeft = (window.innerWidth > 767) ? "10px" : "0px";
	tagLine.style.lineHeight = 0;
	pdf.style.marginTop = (window.innerWidth > 767) ? ((logo.offsetHeight - 35) + "px") : "10px";
	git.style.marginTop = (window.innerWidth > 767) ? ((logo.offsetHeight - 35) + "px") : "10px";
	window.addEventListener('resize', function() {
		var height = logo.offsetHeight;
		var tagLine = document.getElementById('tagline');
		var pdf = document.getElementById('pdf-logo');
		var git = document.getElementById('git-logo');
		console.log(height, tagLine.style.marginTop);
		if(window.innerWidth > 767)
		{
			height -= 20;
			tagLine.style.marginTop = height + "px";
			pdf.style.marginTop = ((logo.offsetHeight - 35) + "px");
			git.style.marginTop = ((logo.offsetHeight - 35) + "px");
		}
		else
		{
			tagLine.style.lineHeight = "0px";
			tagLine.style.marginTop = "15px";
			pdf.style.marginTop = "10px";
			git.style.marginTop = "10px";
		}
	}, true);
}
function adjustTagLine(elem)
{
	console.log('DEBUG');
	var height = elem.offsetHeight;
	var tagLine = document.getElementById('tagline');
	if(height > 767)
	{
		tagLine.style.paddingTop = height + "px !important";
		tagLine.style.marginTop = "0px";
	}
	else
	{
		tagLine.style.lineHeight = "0px";
		tagLine.style.marginTop = "15px";
	}
}