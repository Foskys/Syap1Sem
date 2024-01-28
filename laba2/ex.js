//задание1

function numb1() 
{
    alert("Вас приветствует учебный центр");
    let name = prompt("Ваше имя");
    alert("Добро пожаловать на наши курсы " + name);
    let choice = confirm("Хотите стать Web-дизайнером?");
    if (choice)
    {
     alert("Учите стили CSS и JavaScript!");
    } 
    else
        {
            alert("Упускаете время");
        }
}

//задание2

function numb2() {

    document.write(20+4, "<br>");
    document.write("20"+"4", "<br>");
    document.write("20"+ 4, "<br>");
    document.write(4+"20","<br>");
    alert("Результатом сложения строки и числа всегда будет строка");
    document.write("<br><br>");
}

//задание3

let numb3 = () => {

document.write("<h2>Задание 3</h2>");
let m = 107;
let n = 2;
let example1 = 35 * m - 25 * n / 5 + 232 ** 2;
let example2 = 8 * m / n + 5 * n / m - 43;
console.log(example1);
document.write("<h3>" + example1 + "</h3>");
console.log(example2);
document.write("<h3>" + example2 + "</h3>");
let remainder = example1 % example2;
console.log(remainder);
document.write("<h3>" + remainder + "</h3>");
};

//задание4

function numb4() {

let number = prompt("Введите число");
if ((number < 20 && number > 40) || (number !== 15 && number % 5 === 0)) {
alert("Правильное значение")
} else {
alert("Не правильное значение");
}
}

//задание5

function numb5() {

num1 = prompt("Введите первое число");
num2 = prompt("Введите второе число");

if (num1 > num2) {
alert("Первое чило больше второго");
} else if (num2 > num1) {
alert("Второе число больше первого");
} else {
alert("Числа равны");
}
}

//задание6

function numb6() {

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
case 0:
alert("Сегодня воскресенье");
break;
}
}

//задание7

function numb7() {

const x16 = 0x1A45F0D
const x8 = 0o4562
const x2 = 0b111000

alert("шестнадцатеричной число 0x1A45F0D ==== " + x16);
alert("восьмеричной число 0o4562 ==== " + x8);
alert("двоичной число 0b111000 ==== " + x2);
}

// задание 8

function numb8() {

try {
throw new Error("Опять ошибка");
} catch (e) {
console.log(e);
alert("Произошла ошибка");
} finally {
alert("Конец!");
}
}

//задание2.2

function numb9() 
{
    let a = Number(prompt("Введите число a"));
    let b = Number(prompt("Введите число b"));
    let div = document.getElementById("work");
    let table = document.createElement('table');
    for (i=1; i<=a; i++)
    {

        let tr = document.createElement('tr');
        for (j=1; j<=b; j++)
        {
            let td = document.createElement('td');
            td.textContent = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
    document.body.appendChild(div);
}

//задание2.3

function numb10() 
{
    let a = Number(prompt("Введите число a"));
    let b = Number(prompt("Введите число b"));
    let step = 0.3;
    let div = document.getElementById("work");
    div.innerHTML = '';
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let radius_th = document.createElement('th');
    radius_th.textContent = ('Радиус');
    tr.appendChild(radius_th);
    let S_th = document.createElement('th');
    S_th.textContent = ('Площадь круга');
    tr.appendChild(S_th);
    let L_th = document.createElement('th');
    L_th.textContent = ('Длина окружности');
    tr.appendChild(L_th);
    table.appendChild(tr);

    do
    {
        let tr = document.createElement('tr');
        let radius_td = document.createElement('td');
        radius_td.textContent = a.toFixed(1);
        tr.appendChild(radius_td);
        let S_td = document.createElement('td');
        S_td.textContent = (Math.PI * a ** 2).toFixed(1);
        tr.appendChild(S_td);
        let L_td = document.createElement('td');    
        L_td.textContent = (2 * Math.PI * a).toFixed(1);
        tr.appendChild(L_td);
        table.appendChild(tr);
        a += step;

    }   while (b > a)
        div.appendChild(table);
    document.body.appendChild(div);
}

//задание2.4
function numb11() 
{
    let integer = Number(prompt("Введите Целое число"));
    let fractional = Number(prompt("Введите Дробное число"));
    let arr = [integer, fractional];
    let div = document.getElementById("work");
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let number_th = document.createElement('th');
    number_th.textContent = ('Число');
    tr.appendChild(number_th);
    let method_th = document.createElement('th');
    method_th.textContent = ('Метод');
    tr.appendChild(method_th);
    let result_th = document.createElement('th');
    result_th.textContent = ('Результат');
    tr.appendChild(result_th);
    let method_description_th = document.createElement('th');
    method_description_th.textContent = ('Описание Метода');
    tr.appendChild(method_description_th);
    table.appendChild(tr);
    for (i=0; i < arr.length; i++)
    {
        let tr1 = document.createElement('tr');
        let number_td1 = document.createElement('td');
        number_td1.textContent = arr[i];
        tr1.appendChild(number_td1);
        let method_td1 = document.createElement('td');
        method_td1.textContent = "toExponential()";
        tr1.appendChild(method_td1);
        let result_td1 = document.createElement('td');
        result_td1.textContent = arr[i].toExponential();
        tr1.appendChild(result_td1);
    
        let method_description_td1 = document.createElement('td');
        method_description_td1.textContent = ('представляет число в экспоненциальной форме, параметр количество - целое число, определяющее, сколько цифрпосле точки следует указывать');
        tr1.appendChild(method_description_td1);
        table.appendChild(tr1);
    
        let tr2 = document.createElement('tr');
        let number_td2 = document.createElement('td');
        number_td2.textContent = arr[i];
        tr2.appendChild(number_td2);
    
        let method_td2 = document.createElement('td');
        method_td2.textContent = "toFixed()";
        tr2.appendChild(method_td2);
    
        let result_td2 = document.createElement('td');
        result_td2.textContent = arr[i].toFixed();
        tr2.appendChild(result_td2);
    
        let method_description_td2 = document.createElement('td');
        method_description_td2.textContent = ('представляет число в форме с фиксированнымколичеством цифр после точки, параметр количество - целое числоопределяющее, сколько цифр после точки следует указывать');
        tr2.appendChild(method_description_td2);
        table.appendChild(tr2);
    
        let tr3 = document.createElement('tr');
        let number_td3 = document.createElement('td');
        number_td3.textContent = arr[i];
        tr3.appendChild(number_td3);
    
        let method_td3 = document.createElement('td');
        method_td3.textContent = "toPrecision()";
        tr3.appendChild(method_td3);
        let result_td3 = document.createElement('td');
        result_td3.textContent = arr[i].toPrecision();
        tr3.appendChild(result_td3);
        
        let method_description_td3 = document.createElement('td');
        method_description_td3.textContent = ('представляет число с заданным общимколичеством значащих цифр. Параметр точность - целое числоопределяющее, сколько всего цифр, до и после точки, следует указывать');
        tr3.appendChild(method_description_td3);
        table.appendChild(tr3);
        
        let tr4 = document.createElement('tr');
        let number_td4 = document.createElement('td');
        number_td4.textContent = arr[i];
        tr4.appendChild(number_td4);
        
        let method_td4 = document.createElement('td');
        method_td4.textContent 
        = "toString()";
        tr4.appendChild(method_td4);
        
        let result_td4 = document.createElement('td');
        result_td4.textContent = arr[i].toString();
        tr4.appendChild(result_td4);
        
        let method_description_td4 = document.createElement('td');
        method_description_td4.textContent = ('Строковое представление числа в 16-ричной системе счисления');
        tr4.appendChild(method_description_td4);
        table.appendChild(tr4);
    }
    div.appendChild(table);
    document.body.appendChild(div);
}
   
