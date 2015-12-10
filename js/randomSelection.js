$(document).ready(initializer);

function initializer(){
	var usersScore = 0;
	var enemyScore = 0;
	var currentRound = 0;
	var results;

	var choice = ["rock", "paper", "scissor"];

	$(".btn-success").on("click", function(e){
		e.preventDefault();
		var selectedChoice = Math.floor(Math.random() * choice.length);
 		
		console.log("computer: " + choice[selectedChoice]);
		console.log("user: " + $("#userschoice").val().toLowerCase());

		var usersChoice = $("#userschoice").val().toLowerCase();
		var enemyChoice = choice[selectedChoice];

		results = pointGranted(usersChoice, enemyChoice);

		switch(results){
			case 0:
				usersScore += 1;
				break;
			case 1:
				enemyScore += 1;
				break;
		}

		currentRound += 1;

		console.log("User Score: " + usersScore);
		console.log("Computer Score: " + enemyScore);
		console.log("Round: " + currentRound);

		if(currentRound === 3){
			$('#myModal').modal('show');
		}
		
	});

	function pointGranted(usersChoice, enemyChoice){
		//enemy point = 1
		//users point = 0
		//tie = 2
		var grantedTo;

		if(usersChoice === enemyChoice)
			grantedTo = 2;
		else if(usersChoice === "rock" && enemyChoice === "paper")
			grantedTo = 1;
		else if(usersChoice === "rock" && enemyChoice === "scissor")
			grantedTo = 0;
		else if(usersChoice === "paper" && enemyChoice === "rock")
			grantedTo = 0;
		else if(usersChoice === "paper" && enemyChoice === "scissor")
			grantedTo = 1;
		else if(usersChoice === "scissor" && enemyChoice === "rock")
			grantedTo = 1;
		else if(usersChoice === "scissor" && enemyChoice === "paper")
			grantedTo = 0;

		console.log("");

		return grantedTo;
	}
}
