$(document).ready(initializer);

function initializer(){
	var choice = ["Rock", "Paper", "Scissor"];

	$(".btn-success").on("click", function(){
		var selectedChoice = Math.floor(Math.random() * choice.length);
 		
		console.log(choice[selectedChoice]);
	});
}
