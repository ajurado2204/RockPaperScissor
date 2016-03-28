$(document).ready(initializer);

function initializer(){

  // Initialized variables
	var username;
	var usersScore = 0;
	var enemyScore = 0;
	var currentRound = 0;
	var buttonsSet = false;
  var choice = ["rock", "paper", "scissor"];
	var results;

  // Hides all elements before game begins //
	$("form").hide();
	$("mypullDown").addClass("pullDown");
	$(".myfadeIn").hide();
  $(".displaytext").hide();
  $('#score').hide();
  $('#rock').hide();
  $('#paper').hide();
  $('#scissor').hide();
  $('#shoot').hide();
  $('#usrchoice').hide();
  $("#computerschoice").hide();
  $("#notifyUsr").hide();

  // Event listener when user inputs name and first starts game
	$("#startbtn").on('click', bindHandler);

  // Event listener when user wants to begin the game
	$("#beginbtn").on("click", function(e){
		e.preventDefault();

		$(".jumbotron").hide();
		$(".myfadeIn").show();
		$(".myfadeIn").addClass("fadeIn");

		username = $("#name").val();
		$("#personsname").html(username);


    $('#rectangle4').on('click', function(){
      currentRound += 1;
      $("h3").html("Round: " + currentRound);


      $("h3").delay(1000).show('slow').fadeOut('slow');
      var t0 = setTimeout(function(){
        $(".displaytext").delay(500).show('slow').fadeOut('slow');
        var t1 = setTimeout(function(){
          $("#rock").delay(500).show('slow').fadeOut('slow');
          var t2 = setTimeout(function(){
            $("#paper").delay(500).show('slow').fadeOut('slow');
            var t3 = setTimeout(function(){
              $("#scissor").delay(500).show('slow').fadeOut('slow');
              var t4 = setTimeout(function(){
                $("#shoot").delay(500).show('slow').fadeOut('slow');
                $('#usrchoice').delay(2300).show('slow');
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);


      if(!buttonsSet){
      	$(document).on("click", "#usrrock", computersChoice);
      	$(document).on("click", "#usrpaper", computersChoice);
      	$(document).on("click", "#usrscissor", computersChoice);
      	buttonsSet = true;
      }
    });
	});
	

	function bindHandler(){
		$("form").show();
		$("#startbtn").hide();
  }

	function computersChoice(){

    // Generated computers choice and compares the result of the users choice.
		var selectedChoice = Math.floor(Math.random() * choice.length);
		var usersChoice = ($(this).attr('id')).slice(3);
		var enemyChoice = choice[selectedChoice];
    $('#usrchoice').hide();

		if(enemyChoice === "rock"){
			$("#computerschoice").html("Computer Chose: Rock");
      var t5 = setTimeout(function(){
        $("#computerschoice").delay(300).show('slow').fadeOut(1000);
      }, 500);
		}else if(enemyChoice === "paper"){
			$("#computerschoice").html("Computer Chose: Paper");
      var t5 = setTimeout(function(){
        $("#computerschoice").delay(300).show('slow').fadeOut(1000);
      }, 500);
		}else{
			$("#computerschoice").html("Computer Chose: Scissors");
      var t5 = setTimeout(function(){
        $("#computerschoice").delay(300).show().fadeOut(1000);
      }, 500);
		}

		results = pointGranted(usersChoice, enemyChoice);

		switch(results){
			case 0:
				usersScore += 1;
				break;
			case 1:
				enemyScore += 1;
				break;
		}

    $("#computerschoice").hide();
    $("#userscore").html(username + ": "+usersScore);
    $("#computerscore").html("Computer: "+ enemyScore);
    $("#notifyUsr").html("Click start to begin next round!");


    var t6 = setTimeout(function(){
      $("#score").delay(1000).show('slow').fadeOut(2000);
      var t7 = setTimeout(function(){
        $("#notifyUsr").delay(500).show('slow').fadeOut(3000);
        document.getElementById("startbtn").disabled = false;
        if(currentRound === 5){
          displayResult();
        }
      }, 3000);
    }, 2000);


		$("#giveup").on("click", startAgain);
		$("#seekrev").on("click", resetFunc)
	}


  // Opens modal when 5 rounds are done and displays result to user
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

  // Resets variables when user decides to seet revenge
	function resetFunc(){
		usersScore = 0;
		enemyScore = 0;
		currentRound = 0;
		$("h3").html(currentRound);
		$("#userscore").html(usersScore);
		$("#computerscore").html(enemyScore);
		$("#computerschoice").html("");
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
		$(".myfadeIn").hide();
		$("#startbtn").show();
		$("#computerschoice").html("");

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
