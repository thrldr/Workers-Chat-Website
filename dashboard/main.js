$(document).ready(function(){	

	renderPositions(getPositions());
	
    $('.form-select').change(function(){
        $('.form-control').val($(".form-select option:selected").text());
    });
});