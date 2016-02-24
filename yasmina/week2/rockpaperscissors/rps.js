//alert("omg ur javascript works")

var userscore = 0 ;
var computerscore = 0 ;
var tiescore = 0 ;


var rps = ["rock","paper","scissors"];
var letsplay =confirm("Hi, do you want to play rock/paper/scissors?");

if (letsplay==false) {
	alert("sucks to suck")
}

while (letsplay == true){

var useranswer = prompt("Pick either rock, paper, or scissors!");

while (useranswer !== "rock" || "paper" || "scissors"){

	var useranswer = prompt( " That answer is not valid! Try again.")
	//if (useranswer === "rock"||"paper"||"scissors" ){break;}
}

alert("The computer is playing!");

var computeranswer = rps[Math.floor(Math.random() * rps.length)];

alert("The computer chose " + computeranswer + "!")


if ((useranswer=="rock" && computeranswer=="scissors")||(useranswer=="paper" && computeranswer=="rock")|| (useranswer=="scissors" && computeranswer=="paper")){
	alert("You beat the computer!")
	userscore++;
	var win= userscore;
}


if ((useranswer=="rock" && computeranswer=="paper")||(useranswer=="paper" && computeranswer=="scissors")||(useranswer=="scissors" && computeranswer=="rock")){
	alert("You lost to the computer!")
	computerscore++
	var lose= computerscore;
}


if ((useranswer=="rock" && computeranswer=="rock")||(useranswer=="paper" && computeranswer=="paper")||(useranswer=="scissors" && computeranswer=="scissors")){
	alert("You tied with the computer!")
	tiescore++;
	var tie= tiescore;
}
var letsplay =confirm("Do you want to play again?");

} 

document.write("Your Score: " + win + "<br>" + "<br>")
document.write("Computer Score: " + lose +"<br>"+"<br>")
document.write("Ties: "+ tie)



