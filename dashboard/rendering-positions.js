function appendPosition(position){
	$("#default-position").after(`<option>` + position + `</option>`);
}

function renderPositions(positions){
	positions.forEach(position => {
		appendPosition(position)
	});
}