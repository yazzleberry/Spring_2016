//alert('yar! js working.')
alert("Hi! Welcome to Yasmina's calculator. Press ok to continue.");
alert("This calculator works by entering two numbers and then an operation: add, subtract, multiply, or divide. Press ok to continue.");

var number1 = parseInt(prompt("What's your first number?")); 
 document.write(number1);

var number2 = parseInt(prompt("What's your second number?"));


var operations = prompt("What's your operation? Please use (+) to add, (-) to subtract, (*) to multiply, or (/) divide.");

 document.write(operations);
 document.write(number2);
 document.write("=");

 switch (operations){
   case "+":
   var solution = (number1 + number2);
   break;

   case "-":
   var solution = (number1 - number2);
   break;

   case "*":
   var solution = (number1 * number2);
   break;

   case "/":
   var solution = (number1 / number2);
   break;
 }

document.write(solution)

