/*var ten = 10;
console.log(ten*ten);*/

/*alert("good morning");

var x = 30;
console.log("This is " + x);


console.log(Math.max(2, 4, 10, 52));

confirm("Ну что, поехали?");
prompt("Tell me something", "...");*/

/*var theNumber = Number(prompt("Choose the number", ""));
if(!isNaN(theNumber))
    alert("Square of your number " + theNumber*theNumber);
else
    alert("Please enter the number.");*/
/*
var number = 0;

while (number <= 12){
    console.log(number);
    number += 2;
}
*/
/*var result = 1;
var counter = 0;
while (counter < 10){
    result *= 2;
    counter += 1;
}
console.log(result);*/
/*
do{
    var name = prompt("Who are you?");
}while (!name);
console.log(name);*/
/*for (var number = 0; number <= 12; number += 2)
    console.log(number);*/
/*var result = 1;
for (var counter = 0; counter < 10; counter++)
    result *= 2;
console.log(result);*/

switch (prompt("Как погода?")){
    case "дождь":
        console.log("Не забудь зонт.");
        break;
    case "снег":
        console.log("Не забудь шубу.");
        break;
    case "солнечно":
        console.log("Оденься по легче.");
        break;
    default:
        console.log("Иди гуляй");
        break;
}


