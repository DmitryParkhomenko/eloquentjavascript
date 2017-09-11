/*
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
#
##
###
####
#####
######
#######
 */
var symbol = "#";
var unalteredSymbol = "#";

for (var counter = 0; counter < 7; counter++) {
    console.log(symbol + "\n");
    symbol += unalteredSymbol;
}