//alert("omg ur java works")

//var userscore = 0 +;
//var computerscore = 0 +;
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



if (useranswer=="rock" && computeranswer=="scissors"){
	alert("You beat the computer!")
}

if (useranswer=="paper" && computeranswer=="rock"){
	alert("You beat the computer!")
}
if (useranswer=="scissors" && computeranswer=="paper"){
	alert("You beat the computer!")
}




if (useranswer=="rock" && computeranswer=="paper"){
	alert("You lost to the computer!")
}
if (useranswer=="paper" && computeranswer=="scissors"){
	alert("You lost to the computer!")
}
if (useranswer=="scissors" && computeranswer=="rock"){
	alert("You lost to the computer!")
}


if (useranswer=="rock" && computeranswer=="rock"){
	alert("You tied with the computer!")
}

if (useranswer=="paper" && computeranswer=="paper"){
	alert("You tied with the computer!")
}
if (useranswer=="scissors" && computeranswer=="scissors"){
	alert("You tied with the computer!")
}
var letsplay =confirm("Do you want to play again?");

} 


