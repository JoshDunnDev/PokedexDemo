/* ----- Creates Form ----- */
var $form = $("<form></form>").attr({"class":"search","action":"#"});
$("#filter-form").append($form);

/* ----- Creates Input ----- */
var $input = $("<input></input>").attr({"class":"filter","type":"text","placeholder":"Search for a Pokémon..."});
$("#filter-form .search").append($input);

/* ----- Changes Sting To Capitalize ----- */
function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/* ----- Filters Input Text ----- */
$input.change(function(){
	var filter = capitalise($(this).val());
	if (filter) {
		var $uppercase = $("h1")
		$(".pokemon").find("h1:not(:Contains(" + filter + "))").parent().hide();
		$(".pokemon").find("h1:Contains(" + filter + ")").parent().show();
	} else {
		$(".pokemon").show();
	}
	return false;
}).keyup(function() {
	$(this).change();
});


