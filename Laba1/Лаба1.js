//первое задание

alert("Вас приветствует учебный процесс");
let name = prompt("Введите, пожалуйста, Ваше Имя");
let choise = confirm("Хотите стать Web-дизайнером?");
if (choise)
alert(nаme + ", учите CSS и Java Script!")
else
alert("Упускаете время")

//второе задание

document.write(20+4, "<br>");
document.write("20"+"4", "<br>");
document.write("20"+ 4, "<br>");
document.write(4+"20", "<br>");
alert("Результатом сложения строки и числа всегда будет строка");
document.write("<br><br>");

//третье задание

let x = 2, y = 34553;
let num1 = (35*y-25*x)/5+232;
let num2 = (8*y/x+5*x/y-43)*6;
document.write(num2 % num1, "<br>");
alert(num2 % num1);
document.write("Первое выражеие равно: " + num1 + "<br>" + "Второе выражение равно: " + num2 + "<br>");
alert(num1);
alert(num2);

//четвертое задание

let num = prompt("Введите число");
if (num == 15 || (num > 44 && num <= 6756 && num % 3 ==0))
    alert ("Правильное значение");
else
    alert("Неправильное значение");

//пятое задание

num1= prompt("Введите первое число");
num2= prompt("Введите второе число");
if (num1>num2)
   alert("Первое число больше второго");
else if (num2>num1)
   alert("Второе число больше первого");
else 
   alert("Числа равны");
 let time = prompt("Сколько времени?");
 time >= 16?
 alert("Еще рано идти домой!") : alert ("Сидим до талого!");

 //шестое задание

 let now = new Date();
 let day = now.getDay();
 switch (day) {
case 1: 
       alert("Сегодня понедельник");
        break;
case 2:        
        alert("Сегодня вторник");
        break;
case 3:        
        alert("Сегодня среда");
        break;
case 4:
        alert("Сегодня четверг");
        break;
case 5:        
        alert("Сегодня пятница");
        break;
case 6:        
        alert("Сегодня суббота");
        break;
case 7:        
        alert("Сегодня воскресенье");
        break;
    }

    // седьмое задание
    
// Двоичная система счисления 
var binaryNumber = 0b1010;
// значение: 10(десятичное)

// Восьмеричная система счисления
var octalNumber = 0o20; 
// значение: 16(десятичное)

//Шестнадцатеричная система счисления
var hexadecimalNumber = 0xFF;
// значение: 255 (десятичное)

//восьмое задание 

try {
        let num1 =(prompt("Введите первое число:"));
        let num2 =(prompt("Введите второе число:"));
if (isNaN (num1) || isNaN(num2))
{
throw new Error ("Ошибка!! Введите только целые числа.") ;
}
if (num2==0) {throw new Error ("Ошибка!! Деление на ноль невозможно!");
}
let result = num1/num2;
console.log("Результат деления:", result);
}
catch(error)
{
console.log(error.message);
}




