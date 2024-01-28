// 1
console.log('Task #1');
const person = {
    name: 'Михась',
    age: 31,
    city: 'Вика'
};

console.log(Object.values(person));
console.log(Object.keys(person).map(key => person[key]));

// 2
console.log('Task #2');
const numbers = [123, 456, 789];

// Вывод списка до выравнивания
console.log(numbers);

// Добавляем в начало и конец числа для выравнивания
numbers.forEach((num, index) => {
    if (num % 2 === 0)
        numbers[index] = num.toString().padStart(15, '0');
    else
        numbers[index] = num.toString().padEnd(15, '0');
})

// Вывод списка после выравнивания
console.log(numbers);

// 3
console.log('Task #3');
const realName = 'Viks';
const realSurname = 'Shmanai';
const age = 18;

let randomPrefix = ''
for (let i = 0; i <= 5; i++)
    randomPrefix += String.fromCharCode(Math.floor(Math.random() * 26 + 97));
let newName = randomPrefix + realName;
let newSurname = realSurname + age;

console.log(newName);
console.log(newSurname);

// 4
console.log('Task #4');
const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
array.forEach(element => {
    console.log(`${element.padStart(4, '1')}${''.padEnd(4, ' ')}0`);
});

// 5
console.log('Task #5');
const person5 = {
    name: 'John',
    age: 30
};

// Get all property descriptors
const descriptors = Object.getOwnPropertyDescriptors(person5);

// Pick descriptor for 'name' property
const nameDescriptor = descriptors.name;
console.log(nameDescriptor);


// 6
console.log('Task #6');
// Создаем объект
const person6 = {};

// Добавляем свойство name только для чтения
Object.defineProperty(person6, "name", {
    value: "Михась",
    writable: false
});

// Добавляем свойство city с перезаписью
Object.defineProperty(person6, "city", {
    value: "Вика",
    writable: true
});
console.log("После добавления свойств");
console.log(person6.name);
console.log(person6.city);

// Пытаемся перезаписать name
person6.name = "Юнги";

// Меняем city
person6.city = "Minsk";

console.log("После изменения свойств");
console.log(person6.name);
console.log(person6.city);
