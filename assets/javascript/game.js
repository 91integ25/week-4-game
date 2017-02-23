//Global Varible 
var loss = 0;
var win = 0;
var randomNum = Math.floor(Math.random() * (102)+ 19);
var gemArray = [];
var total = 0;

$(document).ready(function(){
	
	function gemFunc() {

		for (var i = 0; i < 4; i++){

		var gem = Math.floor(Math.random() * 12) + 1 ;
		
		gemArray.push(gem);
	}	
	}

	gemFunc();

   $(".numberToMatch").html(randomNum);


function outputScore(element, index){	

	$(element).on("click", function(){
//take the value and push it to total score

	var gem = gemArray[index];
	
	total = total + gem;
			
	$(".score").html(total);
	
	compScore();
	
});
}

outputScore(".gem1", 0);
outputScore(".gem2", 1);
outputScore(".gem3", 2);
outputScore(".gem4", 3);


	function compScore() {
		if(randomNum === total) {
			
			$("#winlossmessage").html("You win!!");
			
			win++;
			
			$("#wins").html(win);
			
			restart();
			
		}
		else if(randomNum < total){
			
			$("#winlossmessage").html("You lose.");
			
			loss++;
			
			$("#losses").html(loss);
			
			restart();

		}

		function restart() {
			
			gemArray = [];
			
			gemFunc();
			
			randomNum = Math.floor(Math.random() * (102)+ 19);
			
			$(".numberToMatch").html(randomNum);
			
			total = 0;
			
			$(".score").html(total);
			
			$("#winlossmessage").html("");
			
		}
	}



});




