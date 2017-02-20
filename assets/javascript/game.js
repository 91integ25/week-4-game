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


	$(".gem1").on("click", function(){
//take the value and push it to total score

	var gem1 = gemArray[0];
	
	total = total + gem1;
			
	$(".score").html(total);
	
	compScore();
	
});
	$(".gem2").on("click", function(){
//take the value and push it to total score
	
	var gem2 = gemArray[1];
	
	total = total + gem2;
			
	$(".score").html(total);
	
	compScore();
	
});
	$(".gem3").on("click", function(){
//take the value and push it to total score
		
		var gem3 = gemArray[2];
		
		total = total + gem3;
			
		$(".score").html(total);
		
		compScore();

});
	$(".gem4").on("click", function(){
//take the value and push it to total score
		var gem4 = gemArray[3];
		
		total = total + gem4;	
			
		$(".score").html(total);
		
		compScore();
			
});
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




