/* ----- Variables For Loops ----- */
var html = '';
var content;
var type;
var weakness;

/* ----- Prints Data To Page ----- */
function print(html) {
	var outputDiv = document.getElementById('content');
	outputDiv.innerHTML = html;
}

/* ----- Generates HTML ----- */
for (var i = 0; i < pokemon.length; i++) {
	content = pokemon[i];
	html += '<div class="pokemon">';
	html += '<h1>' + content.name + '</h1>';
	html += '<h2>' + content.number + '</h2>';
	html += '<img src="' + content.image + '" alt="' + content.name + '" />';
	html += '<h3>Type</h3>';
	html += '<ul class="type">';

	/* ----- Generates Type List & Class ----- */
	for (var j = 0; j < content.type.length; j++) {
			type = content.type[j];
			html += '<li class="' + type.toLowerCase() + '">' + type + '</li>';
		}

	html += '</ul>';
	html += '<h3>Weaknesses</h3>';
	html += '<ul class="weaknesses">';

	/* ----- Generates Weakness List & Class ----- */
	for (var k = 0; k < content.weakness.length; k++) {
			weakness = content.weakness[k];
			html += '<li class="' + weakness.toLowerCase() + '">' + weakness + '</li>';
		}

	html += '</ul>';
	html += '</div>';
}

print(html);