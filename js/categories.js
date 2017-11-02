var categories = 
{
	games: {key: function(n) {
        return this[Object.keys(this)[n]];
    }},
	applications: {key: function(n) {
        return this[Object.keys(this)[n]];
    }},
	frontend: {key: function(n) {
        return this[Object.keys(this)[n]];
    }},
	frontandback: {key: function(n) {
        return this[Object.keys(this)[n]];
    }}
};
categories.games.planetDefenseGame = "" + 
	"<div id='planetary-defense-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"planetary-defense-header\")'>" +
			"<h3 href='#planetary-defense' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Planetary Defense</h3>" +
		"</a>" +
	"</div>" +
	"<div id='planetary-defense' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='planetary-defense-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='1'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='2'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='3'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='4'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='5'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='6'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='7'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='8'></li>" +
							"<li data-target='#planetary-defense-carousel' data-slide-to='9'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/planetary-defense-screenshots-01.png' alt='Planetary Defense - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/planetary-defense-screenshots-02.png' alt='Planetary Defense - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/planetary-defense-screenshots-03.png' alt='Planetary Defense - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/planetary-defense-screenshots-04.png' alt='Planetary Defense - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/planetary-defense-screenshots-05.png' alt='Planetary Defense - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Planetary Defense <span>(12/2015)</span></h4>" +
					"<h5>-- JavaScript, ThreeJS, PHP, AJAX, &amp; MySQL --</h5>" +
					"<p>A 2D base defender game where player moves concentric rings as expendable barriers to intercept asteroids traveling at random vectors. Blue spheres (cosmic energy) heal barriers on contact. Scores are recorded in a database, and top 5 displayed for each new game.</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/planetary-defense-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/planetary-defense/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.hackBauerGame = "" + 
	"<div id='hack-bauer-codebreaker-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"hack-bauer-codebreaker-header\")'>" +
			"<h3 href='#hack-bauer-codebreaker' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Hack Bauer: Codebreaker</h3>" +
		"</a>" +
	"</div>" +
	"<div id='hack-bauer-codebreaker' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='hack-bauer-codebreaker-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='1'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='2'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='3'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='4'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='5'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='6'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='7'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='8'></li>" +
							"<li data-target='#hack-bauer-codebreaker-carousel' data-slide-to='9'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-01.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-02.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-03.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-04.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-05.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-06.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-07.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-08.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-09.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/hack-bauer-codebreaker-screenshots-10.png' alt='Hack Bauer: Codebreaker - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Hack Bauer: Codebreaker <span>(10/2015)</span></h4>" +
					"<h5>-- JavaScript &amp; ThreeJS --</h5>" +
					"<p>A 3D game styled in the form of pac-man (with an additional first-person POV) and with a parody theme wrapped around the character Jack Bauer from the popular TV series &rdquo;24&ldquo;</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/hack-bauer-codebreaker-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/hack-bauer-codebreaker/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.siegeWarfareGame = "" +
	"<div id='siege-warfare-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"siege-warfare-header\")'>" +
			"<h3 href='#siege-warfare' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Siege Warfare</h3>" +
		"</a>" +
	"</div>" +
	"<div id='siege-warfare' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='siege-warfare-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='1'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='2'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='3'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='4'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='5'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='6'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='7'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='8'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='9'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='10'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='11'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='12'></li>" +
							"<li data-target='#siege-warfare-carousel' data-slide-to='13'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/siege-warfare-screenshots-01.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-02.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-03.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-04.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-05.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-06.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-07.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-08.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-09.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-10.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-11.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-12.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-13.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/siege-warfare-screenshots-14.png' alt='Siege Warfare - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Siege Warfare <span>(9/2015)</span></h4>" +
					"<h5>-- JavaScript, ThreeJS, &amp; PhysiJS--</h5>" +
					"<p>A 3D siege warfare styled game where player fires cannon at a fortification populated by enemies. This game employs a physics engine, multiple ammo type, and a number of camera viewpoints.</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/siege-warfare-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/siege-warfare/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.pong3DGame = "" +
	"<div id='pong-3D-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"pong-3D-header\")'>" +
			"<h3 href='#pong-3D' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Pong 3D</h3>" +
		"</a>" +
	"</div>" +
	"<div id='pong-3D' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='pong-3D-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#pong-3D-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#pong-3D-carousel' data-slide-to='1'></li>" +
							"<li data-target='#pong-3D-carousel' data-slide-to='2'></li>" +
							"<li data-target='#pong-3D-carousel' data-slide-to='3'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/pong-3D-screenshots-01.png' alt='Pong 3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/pong-3D-screenshots-02.png' alt='Pong 3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/pong-3D-screenshots-03.png' alt='Pong 3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/pong-3D-screenshots-04.png' alt='Pong 3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Pong 3D <span>(09/2015)</span></h4>" +
					"<h5>-- JavaScript &amp; ThreeJS --</h5>" +
					"<p>A simple game of Pong using the 3D graphics wrapper library Three.js (WebGL)</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/pong3d-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/pong-3D/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.ticTacToe3DGame = "" +
	"<div id='tictactoe3D-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"tictactoe3D-header\")'>" +
			"<h3 href='#tictactoe3D' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>TicTacToe 3D</h3>" +
		"</a>" +
	"</div>" +
	"<div id='tictactoe3D' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='tictactoe3D-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#tictactoe3D-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#tictactoe3D-carousel' data-slide-to='1'></li>" +
							"<li data-target='#tictactoe3D-carousel' data-slide-to='2'></li>" +
							"<li data-target='#tictactoe3D-carousel' data-slide-to='3'></li>" +
							"<li data-target='#tictactoe3D-carousel' data-slide-to='4'></li>" +
							"<li data-target='#tictactoe3D-carousel' data-slide-to='5'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/tictactoe3D-screenshots-01.png' alt='TicTacToe3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe3D-screenshots-02.png' alt='TicTacToe3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe3D-screenshots-03.png' alt='TicTacToe3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe3D-screenshots-04.png' alt='TicTacToe3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe3D-screenshots-05.png' alt='TicTacToe3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe3D-screenshots-06.png' alt='TicTacToe3D - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>TicTacToe 3D <span>(08/2015)</span></h4>" +
					"<h5>-- JavaScript &amp; SVG --</h5>" +
					"<p>A 3D-Isometric tac-tac-toe game using HTML/CSS/JavaScript that incorporates an AI player that uses the minimax algorthm to determine it's best move (with alpha-beta pruning and memoization for better AI decision time).</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/tictactoe3d-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/tictactoe3D/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.ticTacToe2DGame = "" +
	"<div id='tictactoe2D-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"tictactoe2D-header\")'>" +
			"<h3 href='#tictactoe2D-v2' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>TicTacToe 2D</h3>" +
		"</a>" +
	"</div>" +
	"<div id='tictactoe2D-v2' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='tictactoe2D-AIOpponent-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#tictactoe2D-AIOpponent-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#tictactoe2D-AIOpponent-carousel' data-slide-to='1'></li>" +
							"<li data-target='#tictactoe2D-carousel' data-slide-to='2'></li>" +
							"<li data-target='#tictactoe2D-carousel' data-slide-to='3'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/tictactoe2D-AIOpponent-screenshots-01.png' alt='TicTacToe2D-v2 - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe2D-AIOpponent-screenshots-02.png' alt='TicTacToe2D-v2 - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe2D-screenshots-01.png' alt='TicTacToe2D-v2 - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/tictactoe2D-screenshots-02.png' alt='TicTacToe2D-v2 - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>TicTacToe 2D (2.0) <span>(08/2015)</span></h4>" +
					"<h5>-- JavaScript --</h5>" +
					"<p>A simple tac-tac-toe game using HTML/CSS/JavaScript, incorporating an AI player that uses the minimax algorthm to determine it's best move. This is the first program of mine using JSDoc for better documentation.</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/tictactoe2d-ai-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/tictactoe2D-AIOpponent/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
					"<h4 id='first-version'>TicTacToe 2D (1.0)</h4>" +
					"<h5><span>(04/2015)</span></br>A simple tac-tac-toe game using HTML/CSS/JavaScript</h5>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/tictactoe2d-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/tictactoe2D/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.qFishGame = "" +
	"<div id='q-fish-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"q-fish-header\")'>" +
			"<h3 href='#q-fish' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Q-Fish</h3>" +
		"</a>" +
	"</div>" +
	"<div id='q-fish' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='q-fish-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#q-fish-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#q-fish-carousel' data-slide-to='1'></li>" +
							"<li data-target='#q-fish-carousel' data-slide-to='2'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/q-fish-screenshots-01.png' alt='q-fish - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/q-fish-screenshots-02.png' alt='q-fish - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/q-fish-screenshots-03.png' alt='q-fish - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Q-Fish <span>(06/2015)</h4>" +
					"<h5>-- JavaScript --</h5>" +
					"<p>A simple fish eat fish game using HTML/CSS/JavaScript</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/q-fish-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/q-fish/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.totalRecallGame = "" +
	"<div id='total-recall-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"total-recall-header\")'>" +
			"<h3 href='#total-recall' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Total-Recall</h3>" +
		"</a>" +
	"</div>" +
	"<div id='total-recall' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='total-recall-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#total-recall-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#total-recall-carousel' data-slide-to='1'></li>" +
							"<li data-target='#total-recall-carousel' data-slide-to='2'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/total-recall-screenshots-01.png' alt='TicTacToe2D-v2 - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/total-recall-screenshots-02.png' alt='TicTacToe2D-v2 - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/total-recall-screenshots-03.png' alt='TicTacToe2D-v2 - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Total-Recall <span>(04/2015)</span></h4>" +
					"<h5>-- JavaScript --</h5>" +
					"<p>A simple memory card game using HTML/CSS/JavaScript</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/total-recall-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/total-recall/index.html' target='_blank' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.games.cinemaGuruGame = "" +
	"<div id='cinema-guru-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"cinema-guru-header\")'>" +
			"<h3 href='#cinema-guru' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>CinemaGuru</h3>" +
		"</a>" +
	"</div>" +
	"<div id='cinema-guru' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='cinema-guru-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#cinema-guru-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#cinema-guru-carousel' data-slide-to='1'></li>" +
							"<li data-target='#cinema-guru-carousel' data-slide-to='2'></li>" +
							"<li data-target='#cinema-guru-carousel' data-slide-to='3'></li>" +
							"<li data-target='#cinema-guru-carousel' data-slide-to='4'></li>" +
							"<li data-target='#cinema-guru-carousel' data-slide-to='5'></li>" +
							"<li data-target='#cinema-guru-carousel' data-slide-to='6'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/cinema-guru-screenshots-01.png' alt='CinemaGURU - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/cinema-guru-screenshots-02.png' alt='CinemaGURU - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/cinema-guru-screenshots-03.png' alt='CinemaGURU - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/cinema-guru-screenshots-04.png' alt='CinemaGURU - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/cinema-guru-screenshots-05.png' alt='CinemaGURU - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/cinema-guru-screenshots-06.png' alt='CinemaGURU - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/cinema-guru-screenshots-07.png' alt='CinemaGURU - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>CinemaGuru <span>(01/2015)</span></h4>" +
					"<h5>-- C++ --</h5>" +
					"<p>A text-based, C++ game operating entirely within the console window. Both links below give access to the necessary execution files.</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/cinema-guru-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/cinema-guru/CinemaGuru.zip' class='btn btn-danger'>Click to play this game <span class='glyphicon glyphicon-download-alt'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.applications.TrigDriverApp = "" +
	"<div id='trig-driver-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"trig-driver-header\")'>" +
			"<h3 href='#trig-driver' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Trig Driver</h3>" +
		"</a>" +
	"</div>" +
	"<div id='trig-driver' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='trig-driver-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#trig-driver-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#trig-driver-carousel' data-slide-to='1'></li>" +
							"<li data-target='#trig-driver-carousel' data-slide-to='2'></li>" +
							"<li data-target='#trig-driver-carousel' data-slide-to='3'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/trig-driver-screenshots-01.png' alt='Trig Driver - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/trig-driver-screenshots-02.png' alt='Trig Driver - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/trig-driver-screenshots-03.png' alt='Trig Driver - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/trig-driver-screenshots-04.png' alt='Trig Driver - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Trig Driver <span>(10/2015)</span></h4>" +
					"<h5>-- JavaScript &amp; ThreeJS --</h5>" +
					"<p>An application to visually connect a basic understanding of trigonometry.</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/trig-driver-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='#' class='btn btn-danger'>Play Not Permited <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.applications.encryptorApp = "" +
	"<div id='encryptor-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"encryptor-header\")'>" +
			"<h3 href='#encryptor' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>The Encryptor</h3>" +
		"</a>" +
	"</div>" +
	"<div id='encryptor' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='encryptor-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#encryptor-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#encryptor-carousel' data-slide-to='1'></li>" +
							"<li data-target='#encryptor-carousel' data-slide-to='2'></li>" +
							"<li data-target='#encryptor-carousel' data-slide-to='3'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/encryptor-screenshots-01.png' alt='The Encryptor - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/encryptor-screenshots-02.png' alt='The Encryptor - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/encryptor-screenshots-03.png' alt='The Encryptor - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/encryptor-screenshots-04.png' alt='The Encryptor - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>The Encryptor <span>(09/2015)</span></h4>" +
					"<h5>-- PHP &amp; Encryption Algorithms --</h5>" +
					"<p>An application that encrypts and decodes text using a number of cryptographic algorithms.</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/encryptor-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/encryptor/index.php' target='_blank' class='btn btn-danger'>Click to use this application <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.applications.fakeBankApp = "" +
	"<div id='fake-bank-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"fake-bank-header\")'>" +
			"<h3 href='#fake-bank' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Fake Bank</h3>" +
		"</a>" +
	"</div>" +
	"<div id='fake-bank' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='fake-bank-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#fake-bank-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#fake-bank-carousel' data-slide-to='1'></li>" +
							"<li data-target='#fake-bank-carousel' data-slide-to='2'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/fake-bank-screenshots-01.jpg' alt='Fake Bank - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/fake-bank-screenshots-02.jpg' alt='Fake Bank - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/fake-bank-screenshots-03.jpg' alt='Fake Bank - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Fake Bank <span>(02/2016)</span></h4>" +
					"<h5>-- Java, JavaFX, Scene Builder 2.0,, &amp; Multithreading --</h5>" +
					"<p>A simple GUI using Java's FXML, Scene Builder 2.0, and a 'Lock' to make program thread-safe.</p>" +
					"<p>It's a demonstration of multi-threaded programming using a variable number of competing deposit and withdrawal threads to simulate a bank account.</p>" +
					"<a href='http://www.williamrobertfunk.com/applications/fake-bank/Fake_Bank.zip' class='btn btn-danger'>Click to use this application <span class='glyphicon glyphicon-download-alt'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.applications.bookstoreApp = "" +
	"<div id='bookstore-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"bookstore-header\")'>" +
			"<h3 href='#bookstore' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Bookstore</h3>" +
		"</a>" +
	"</div>" +
	"<div id='bookstore' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='bookstore-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#bookstore-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='1'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='2'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='3'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='4'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='5'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='6'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='7'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='8'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='9'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='10'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='11'></li>" +
							"<li data-target='#bookstore-carousel' data-slide-to='12'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/bookstore-screenshots-01.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-02.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-03.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-05.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-06.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-07.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-08.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-09.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-10.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-11.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-12.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/bookstore-screenshots-13.jpg' alt='Bookstore - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Bookstore <span>(01/2016)</span></h4>" +
					"<h5>-- Java, JavaFX, &amp; Scene Builder 2.0 --</h5>" +
					"<p>A simple GUI using Java's FXML, Scene Builder 2.0, and basic file read/write.</p>" +
					"<p>It's a simulation of a book purchasing interface, where user enters in a book's code, along with quantity. A transaction record is created with all orders.</p>" +
					"<a href='http://www.williamrobertfunk.com/applications/bookstore/Bookstore.zip' class='btn btn-danger'>Click to use this application <span class='glyphicon glyphicon-download-alt'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.frontend.phoodBuddyFrontEnd = "" +
	"<div id='phood-buddy-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"phood-buddy-header\")'>" +
			"<h3 href='#phood-buddy' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Phood Buddy</h3>" +
		"</a>" +
	"</div>" +
	"<div id='phood-buddy' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='phood-buddy-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='1'></li>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='2'></li>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='3'></li>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='4'></li>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='5'></li>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='6'></li>" +
							"<li data-target='#phood-buddy-carousel' data-slide-to='7'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/phood-buddy-screenshots-01.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-02.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-03.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-04.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-05.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-06.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-07.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-08.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-09.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-10.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-11.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-12.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-13.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-14.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-15.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-16.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-17.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-18.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-19.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-20.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-21.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/phood-buddy-screenshots-22.jpg' alt='Phood Buddy - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Phood Buddy <span>(05/2016)</span></h4>" +
					"<h5>-- HTML5, CSS, JavaScript, &amp; Firebase --</h5>" +
						"<p>An exploration into the use of Firebase as a backend for a webapp, merged with a desire to solve the age old question: " + 
						"\"What should I eat tonight\" and the apathetic response that can sometimes follow. Phood Buddy not only suggests any of hundreds recipes, " +
						"it takes it to the next level by catering to user's tastes, avoiding allergies and health conditions, as well as assisting with meal tracking, " +
						"exercise, and the groceries. Even available deals offered on ingrdients in your list. My portion focused on frontend for the desktop version. " +
						"Many of the backend services were never completed, leaving only this pure Javascript client-side.</p>" +
					"<a href='https://phood-buddy.com' target='_blank' class='btn btn-danger'>Click to visit site <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.frontend.theCabalEffectFrontEnd = "" +
	"<div id='the-cabal-effect-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"the-cabal-effect-header\")'>" +
			"<h3 href='#the-cabal-effect' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>The Cabal Effect</h3>" +
		"</a>" +
	"</div>" +
	"<div id='the-cabal-effect' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='the-cabal-effect-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='1'></li>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='2'></li>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='3'></li>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='4'></li>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='5'></li>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='6'></li>" +
							"<li data-target='#the-cabal-effect-carousel' data-slide-to='7'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/the-cabal-effect-screenshots-01.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/the-cabal-effect-screenshots-02.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/the-cabal-effect-screenshots-03.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/the-cabal-effect-screenshots-04.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/the-cabal-effect-screenshots-05.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/the-cabal-effect-screenshots-06.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/the-cabal-effect-screenshots-07.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/the-cabal-effect-screenshots-08.jpg' alt='The Cabal Effect - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>The Cabal Effect <span>(01/2016)</span></h4>" +
					"<h5>-- HTML5, CSS, JavaScript, &amp; Parse --</h5>" +
						"<p>At the 24-hour Knight Hacks Hackathon, we had less than that many hours to produce " + 
						"a prototype for a conspiracy-based social media platform. There is a website version (my contribution), " +
						"an Android Mobile version (Evan Glazer's contribution), and a Parse back-end (Jorge Rodriguez' contribution).</p>" +
					"<p>See project notes: <a href='http://www.williamrobertfunk.com/chronicles/the-cabal-effect-chronicle.html' target='_blank'>&lt;Chronicle&gt;</a></p>" +
					"<a href='http://www.williamrobertfunk.com/applications/the-cabal-effect/' target='_blank' class='btn btn-danger'>Click to visit site <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.frontend.contentAlertFrontEnd = "" +
	"<div id='content-alert-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"content-alert-header\")'>" +
			"<h3 href='#content-alert' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Content Alert</h3>" +
		"</a>" +
	"</div>" +
	"<div id='content-alert' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='content-alert-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#content-alert-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#content-alert-carousel' data-slide-to='1'></li>" +
							"<li data-target='#content-alert-carousel' data-slide-to='2'></li>" +
							"<li data-target='#content-alert-carousel' data-slide-to='3'></li>" +
							"<li data-target='#content-alert-carousel' data-slide-to='4'></li>" +
							"<li data-target='#content-alert-carousel' data-slide-to='5'></li>" +
							"<li data-target='#content-alert-carousel' data-slide-to='6'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/content-alert-screenshots-01.jpg' alt='Content Alert - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/content-alert-screenshots-02.jpg' alt='Content Alert - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/content-alert-screenshots-03.jpg' alt='Content Alert - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/content-alert-screenshots-04.jpg' alt='Content Alert - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/content-alert-screenshots-05.jpg' alt='Content Alert - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/content-alert-screenshots-06.jpg' alt='Content Alert - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/content-alert-screenshots-07.jpg' alt='Content Alert - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Content Alert <span>(12/2015)</span></h4>" +
					"<h5>-- HTML5, CSS, &amp; JavaScript --</h5>" +
					"<p>Contracted to build the front-end for an email-filtering application</p>" +
					"<a href='http://www.contentalert.com' target='_blank' class='btn btn-danger'>Click to visit site <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.frontandback.twoTieredClientServerFrontAndBack = "" +
	"<div id='two-tiered_client-server-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"two-tiered_client-server-header\")'>" +
			"<h3 href='#two-tiered_client-server' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Two-Tiered Client-Server Application</h3>" +
		"</a>" +
	"</div>" +
	"<div id='two-tiered_client-server' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='two-tiered_client-server-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='1'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='2'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='3'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='4'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='5'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='6'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='7'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='8'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='9'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='10'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='11'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='12'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='13'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='14'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='15'></li>" +
							"<li data-target='#two-tiered_client-server-carousel' data-slide-to='16'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/two-tiered-client-server-screenshots_01.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-02.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-03.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-05.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-06.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-07.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-08.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-09.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-10.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-11.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-12.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-13.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-14.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-15.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-16.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/two-tiered-client-server-screenshots-17.jpg' alt='Two-Tiered Client-Server Application - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Two-Tiered Client-Server Application <span>(02/2016)</span></h4>" +
					"<h5>-- Java, JavaFX, Scene Builder 2.0, &amp; MySQL --</h5>" +
					"<p>Small Java application (GUI) demonstrating connectivity to a MySQL database.</p>" +
					"<p>An interface that allows all CRUD operations to and from a client-side MySQL server.</p>" +
					"<a href='http://www.williamrobertfunk.com/applications/two-tier_client-server_application/Two-Tiered_Client-Server_Application.zip' class='btn btn-danger'>Click to use this application <span class='glyphicon glyphicon-download-alt'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";

categories.frontandback.financialTrackingRepositoryFrontAndBack = "" +
	"<div id='financial-tracking-repository-header' class='panel-heading'>" +
		"<a class='panel-title' onclick='setPanelToTop(\"financial-tracking-repository-header\")'>" +
			"<h3 href='#financial-tracking-repository' class='accordion-toggle' data-toggle='collapse' data-parent='#accordion-projects'>Financial Tracking Repository (in-progress)</h3>" +
		"</a>" +
	"</div>" +
	"<div id='financial-tracking-repository' class='panel-collapse collapse'>" +
		"<div class='panel-body'>" +
			"<div class='row row-body'>" +
				"<div class='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12 pull-right'>" +
					"<!-- Carousel for screenshots -->" +
					"<div id='financial-tracking-repository-carousel' class='carousel slide' data-ride='carousel' data-interval='2500'>" +
						"<!-- Indicators -->" +
						"<ol class='carousel-indicators'>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='0' class='active'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='1'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='2'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='3'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='4'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='5'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='6'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='7'></li>" +
							"<li data-target='#financial-tracking-repository-carousel' data-slide-to='8'></li>" +
						"</ol>" +
						"<!-- Wrapper for slides -->" +
						"<div class='carousel-inner' role='listbox'>" +
							"<div class='item active'>" +
								"<img src='images/financial-tracking-repository-screenshots-01.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-02.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-03.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-04.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-05.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-06.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-07.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-08.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
							"<div class='item'>" +
								"<img src='images/financial-tracking-repository-screenshots-09.jpg' alt='Financial Tracking Repository - Screenshot' class='img-responsive img-rounded centered'>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>" +
					"<h4>Financial Tracking Repository <span>(12/2015)</span></h4>" +
					"<h5>-- HTML5, CSS, JavaScript, &amp; ReactJS --</h5>" +
					"<p>Built for the purpose of keeping track of my own finances, and a desire to practice my knowledge of the ReactJS framework.</p>" +
					"<p>Uses a typical HTML5, CSS, and JavaScript (some use of JQuery) for the front-end, AJAX to communciate with the back-end, PHP as the back-end data layer, and an SQL database.</p>" +
					"<a href='http://www.williamrobertfunk.com/applications/financial-tracking-repository/' target='_blank' class='btn btn-danger'>Click to visit site <span class='glyphicon glyphicon-circle-arrow-right'></span></a>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>";