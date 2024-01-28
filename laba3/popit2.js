// dopolnitelno zadanie
let ar1=[5,2,8,1,9];
ar1.sort((a,b)=>b-a);
console.log(ar1);

let ar2=[5,2,8,1,9];
ar2.sort((a,b)=>a-b);
console.log(ar2);


// задание 1
console.log(Array().pop)
const S = 23.5;
const n = 5;
const V_12 = 12.5;
arr =['arraaa', 'arr1','arr2'];
console.log('AAA',arr)
// arr[0] = 6 - Math.pow (Math.PI,2) + 3 * Math.exp(8);
// arr[1] = 2 * Math.cos(4) + Math.cos(12) + 8 - Math.exp(3);
// arr[2] = 3 * Math.sin(9) + Math.log(5) + S;
// arr[3] = 2 * Math.tan(5) + 6 - n + V_12;
let min = max = arr[0];
for (let i = 1; i <= arr.length; i++){
if(min >= arr[i])
min = arr[i]

if (max <= arr[i])
max = arr[i]
}
console.log(min, max);        //интерфейс-math   
                             //Array нужно что-то, иначе оно не будет работать
// задание 3.1
let arr_from = Array.from("Vika",(letter) => letter+'a');
console.log(arr_from);

// задание 3.2
console.log(Array.of(5, {}, [], "d"));

// задание 4
let arr_methods = [Math.pow, Array().pop, Array().push, Array().shift, Math.round, Math.floor, Array().slice, Array().sort]; /*slice - создает массив из элементов исходного элемента с индексами указанного диапазона*/ 
console.log(arr_methods);
let arr_Array_methods = [];
let arr_Math_methods = [];

for (let i = 0; i < arr_methods.length; i++ ){
if (Object.hasOwn(Math, arr_methods[i].name)){        /*безопасный способ проверить есть ли у объекта собственное не унаследованное свойство*/
arr_Math_methods.push(arr_methods[i])
} else {
arr_Array_methods.push(arr_methods[i])
}
}

console.log(arr_Math_methods);
console.log(arr_Array_methods);

arr_Array_methods.push(Array().concat);         /*push-добавляет к массиву указанное значение в качестве последнего элемента и возвращает новую длину массива */
arr_Math_methods.unshift(Math.tan);            /*добавляет один или более элементов в начало массива и возвращает новую длину массива*/
                                              
console.log(arr_Math_methods);
console.log(arr_Array_methods);
console.log(arr_methods);
console.log(arr_methods.length)
console.log(arr_Math_methods.length);
console.log(arr_Array_methods.length);

//задание 5
let str = 'Шманай Виктория Александровна';
document.write ('<h4>' + str + '</h4>');
document.write ('<h4>' + str.length + '</h4>');

document.write ('<h4>' + str.toUpperCase() + '</h4>');
document.write ('<h4>' + str.toLowerCase() + '</h4>');
document.write ('<h4>' + str.toLowerCase().concat(str.toUpperCase()) + '</h4>');

function name(str) {
return str.split(/\s+/).map(( j, k) => k ? j.substring(0,1).toUpperCase() + '.' : j).join(' '); /*map - принимает первым параметром функцию, перебирает элементы и для каждой вызывает функцию, результаты в новый массив*/
}                                                                                               /*split-возвращает новый массив, substring- возвращает подстроку строки между двумя индексами, join- объединяет элементы массива в строку*/
document.write('<h4>' + name('Шманай Виктория Александровна') + '</h4>');

// задание 6
let date = new Date()
let table = document.createElement('table');
let tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Год';
tr.appendChild(document.createElement('td')).innerHTML = date.getFullYear();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Месяц';
tr.appendChild(document.createElement('td')).innerHTML = date.getMonth()+1;
tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'День';
tr.appendChild(document.createElement('td')).innerHTML = date.getDate();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Час';
tr.appendChild(document.createElement('td')).innerHTML = date.getHours();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Минуты';
tr.appendChild(document.createElement('td')).innerHTML = date.getMinutes();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Секунды';
tr.appendChild(document.createElement('td')).innerHTML = date.getSeconds();

document.body.appendChild(table);


