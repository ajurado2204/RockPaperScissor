$(document).ready(initializer);

function initializer(){
	var username;
	var usersScore = 0;
	var enemyScore = 0;
	var currentRound = 0;
	var results;


	$("form").hide();
	$("mypullDown").addClass("pullDown");
	$("#myfadeIn").hide();

	var choice = ["rock", "paper", "scissor"];

	$("#startbtn").on("click", function(e){
		e.preventDefault();
		$("form").show();
		$("#startbtn").hide();
	});

	$("#beginbtn").on("click", function(e){
		e.preventDefault();
		$(".jumbotron").hide();
		$("#myfadeIn").show();
		$("#myfadeIn").addClass("fadeIn");

		username = $("#name").val();
		$("#personsname").html(username);

		$(document).on("click", "#rock", computersChoice);
		$(document).on("click", "#paper", computersChoice);
		$(document).on("click", "#scissor", computersChoice);
	});
	

	function computersChoice(){
		var selectedChoice = Math.floor(Math.random() * choice.length);
		var usersChoice = $(this).attr('id');
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
		$("h3").html(currentRound);
		$("#userscore").html(usersScore);
		$("#computerscore").html(enemyScore);

		if(currentRound === 5){
			displayResult();
		}

		$("#giveup").on("click", startAgain);
		$("#seekrev").on("click", resetFunc)
	}



	function displayResult(){
		if(usersScore > enemyScore){
			$("#myModalLabel").html("Round 5 complete");
			$(".modal-body").html("Awsome! You won");
		}else if(usersScore < enemyScore){
			$("#myModalLabel").html("Round 5 complete");
			$(".modal-body").html("You Lost!");
		}else{
			$("#myModalLabel").html("Round 5 complete");
			$(".modal-body").html("It was a tie!");
		}
			
		$("#myModal").modal({
			backdrop: 'static', 
			keyboard: false
		});
	}


	function resetFunc(){
		usersScore = 0;
		enemyScore = 0;
		currentRound = 0;
		$("h3").html(currentRound);
		$("#userscore").html(usersScore);
		$("#computerscore").html(enemyScore);
	}


	function startAgain(){
		usersScore = 0;
		enemyScore = 0;
		currentRound = 0;
		$("h3").html(currentRound);
		$("#userscore").html(usersScore);
		$("#computerscore").html(enemyScore);
		$("form").hide();
		$(".jumbotron").show();
		$("mypullDown").addClass("pullDown");
		$("#myfadeIn").hide();
		$("#startbtn").show();
	}




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

		return grantedTo;
	}
}
