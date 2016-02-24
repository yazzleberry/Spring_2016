alert("omg ur javascript works")

var userscore = 0 + uscores1;
var computerscore = 0 +cscores1;
var tiescore = 0 + parseInt(tscores1);
var rps = ["rock","paper","scissors"];
var letsplay =confirm("Hi, do you want to play rock/paper/scissors?");

if (letsplay==false) {

	alert("sucks to suck")
}

while (letsplay == true){

var useranswer = prompt("Pick either rock, paper, or scissors!");

alert("The computer is playing!");

var computeranswer = rps[Math.floor(Math.random() * rps.length)];

alert("The computer chose " + computeranswer + "!")



if ((useranswer=="rock" && computeranswer=="scissors")||(useranswer=="paper" && computeranswer=="rock")|| (useranswer=="scissors" && computeranswer=="paper")){
	alert("You beat the computer!")
	var uscore1 = 0;
	uscore1++;
	var uscores1= uscore1;
}


if ((useranswer=="rock" && computeranswer=="paper")||(useranswer=="paper" && computeranswer=="scissors")||(useranswer=="scissors" && computeranswer=="rock")){
	alert("You lost to the computer!")
	var cscore1 = 0;
	cscore1++;
	var cscores1= cscore1;
}


if ((useranswer=="rock" && computeranswer=="rock")||(useranswer=="paper" && computeranswer=="paper")||(useranswer=="scissors" && computeranswer=="scissors")){
	alert("You tied with the computer!")
	var tscore1 = 0;
	tscore1++;
	var tscores1= parseInt(tscores1);
}

var letsplay =confirm("Do you want to play again?");

} 

document.write("Your Score: " + userscore + "<br>")
document.write("Computer Score: " + computerscore +"<br>")
document.write("Ties: "+ tiescore)


