var categories = [];
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
	const splitWords = words.split(",");
	const matches = [];
	for(var i = 0; i < categories.length; i++) {
		const cat = categories[i];
		const tags = cat.tags;
		if (!tags.length) {
			continue;
		}
		for (var j = 0; j < splitWords.length; j++) {
			if (tags.includes(splitWords[j].trim())) {
				matches.push(cat);
				break;
			}
		}
	}
	matches.sort(function(a, b) {
		if (a.year > b.year) {
			return -1;
		} else {
			return 1;
		}
	});
	matches.forEach(categ => {
		elem.innerHTML += makeProjectSection(categ);
	});
	if (!matches.length) {
		elem.innerHTML += "<div style=\"margin-top: 75px;\"><h3>There are no applications with tags that match your query.</h3></div>";
	}
}
function init()
{
	fetch("./assets/categories.json")
		.then(response => {
			return response.json();
		})
		.then(cats => {
			categories = cats;
			fillCategory('game, angular, pixijs');

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
		})
		.catch(err => {
			console.error("Failed to load project categories from json file.", err);
		});
}
function adjustTagLine(elem)
{
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
function makeProjectSection(category) {
	var html = "" +
		"<div id='" + category.id + "-header' class='panel-heading'>" +
			"<a class='panel-title' onclick='setPanelToTop(\"" + category.id + "-header\")'>" +
				"<h3 href='#" + category.id + "' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>" + category.name + "</h3>" +
			"</a>" +
		"</div>" +
		"<div id='" + category.id + "' class='panel-collapse collapse'>" +
			"<div class='panel-body'>" +
				"<div class='row row-body'>" +
					"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
						"<!-- Carousel for screenshots -->" +
						"<div id='" + category.carouselId + "' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
							"<!-- Indicators -->" +
							"<ol class='carousel-indicators'>";
	html += makeProjectSlideReferences(category.carouselId, category.images);
	html += 				"</ol>" +
							"<!-- Wrapper for slides -->" +
							"<div class='carousel-inner' role='listbox'>";
	html += makeProjectSlides(category.name, category.images);
	html += 				"</div>" +
						"</div>" +
					"</div>" +
					"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>";
	html += makeProjectTitle(category.name, category.month, category.year);
	html += makeProjectSubtitle(category.subtitle);
	html += makeProjectParagraphs(category.paragraphs);
	html += makeProjectLink(category.linkTarget, category.linkMessage);
	if (category.secondaryTitle) {
		html += makeProjectTitle(category.secondaryTitle, category.secondaryMonth, category.secondaryYear);
		html += makeProjectSubtitle(category.secondarySubtitle);
		html += makeProjectParagraphs(category.secondaryParagraphs);
		html += makeProjectLink(category.secondaryLinkTarget, category.secondaryLinkMessage);
	}
	html += 		"</div>" +
				"</div>" +
			"</div>" +
		"</div>";
	return html;
}
function makeProjectSlideReferences(id, images) {
	var references = "<li data-target='#" + id + "' data-slide-to='0' class='active'></li>";
	for (var i = 1; i < images.length; i++) {
		references += "<li data-target='#" + id + "' data-slide-to='" + i + "'></li>";
	}
	return references;
}
function makeProjectSlides(name, images) {
	var slides = "<div class='item active'>" +
		"<img src='images/" + images[0] + "' alt='" + name + " - Screenshot' class='img-responsive img-rounded centered'>" +
	"</div>";
	for (var i = 1; i < images.length; i++) {
		slides += "<div class='item'>" +
			"<img src='images/" + images[i] + "' alt='" + name + " - Screenshot' class='img-responsive img-rounded centered'>" +
		"</div>";
	}
	return slides;
}
function makeProjectTitle(name, month, year) {
	return "<h4>" + name + " <span>(" + month + "/" + year + ")</span></h4>";
}
function makeProjectSubtitle(subtitle) {
	return "<h5>" + subtitle + "</h5>";
}
function makeProjectParagraphs(paragraphs) {
	var ps = "";
	for (var i = 0; i < paragraphs.length; i++) {
		ps += "<p>" + paragraphs[i] + "</p>";
	}
	return ps;
}
function makeProjectLink(target, label) {
	return "<a href='" + target + "' target='_blank' class='btn btn-danger' style=\"margin-bottom: 25px;\">" + label + " <span class='glyphicon glyphicon-circle-arrow-right'></span></a>"
}