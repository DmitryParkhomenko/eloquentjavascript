/*
Напишите программу, которая выводит через console.log все числа от 1 до
100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна
выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех
чисел, которые делятся и на 3, и на 5.
(На самом деле, этот вопрос подходит для собеседований, и, говорят, он
позволяет отсеивать довольно большое число кандидатов. Поэтому, когда вы
решите эту задачу, можете себя похвалить.)
 */



var fizz = "Fizz";
var buzz = "Buzz";

for (var counter = 0; counter < 100; counter++) {
    /*    if (counter % 3 === 0 && counter !== 0) {
            console.log(fizz);
        } else if (counter % 5 === 0 && counter % 3 !== 0) {
            console.log(buzz);
        } else {
            console.log(counter);
        }*/

    if (counter % 3 === 0 && counter !== 0) {
        console.log(fizz + buzz);
    } else if (counter % 5 === 0 && counter !== 3 && counter !== 0) {
        console.log(fizz + buzz);
    } else {
        console.log(counter);
    }
}