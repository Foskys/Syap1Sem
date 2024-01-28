//Первое задание
function Gruppa(num, speciality, amount)               
{
    //Свойства(номер, специальность, количество)
    this.num = num;
    this.speciality = speciality;
    this.amount = amount;
    
    //Метод (добавить в группу k студентов)
    this.add_stud = function add_stud(k) 
    {
        this.amount += k;
        document.write('В группу №' + this.num + ' добавили ' + k + ' студента(ов).<br>');
    }
    //Отчисление студентов
    this.sub_stud = function sub_stud(k)
    {
        this.amount -= k;
        document.write('Из группы №' + this.num + ' отчислили ' + k + ' студента(ов).<br>')
    }
}
    
    let isit3 = new Gruppa(3, 'ИСиТ', 30);    //new-конструктор, для инициализации вновь созданного объекта
    isit3.add_stud(1);
    isit3.sub_stud(3);
    let poit9 = new Gruppa(9, 'ПОИТ', 30);
    poit9.add_stud(4);
    poit9.sub_stud(2);
    console.log(isit3);
    console.log(poit9);
    document.write('');
    
    //Второе задание
class Student{
    constructor(name, second_name, physics, math, informatics){
//this.name = name;
    this.second_name = second_name;
    this.physics = physics;
    this.math = math;
    this.informatics = informatics;
    
    this.avg_rating = function avg_rating()
    {
        document.write('<br>Средний балл студента по имени ' + this.name + ' равен ' + ((this.physics + this.math + this.informatics) / 3).toFixed(2)+ '<br>');
    }
    
    this.introduce = function introduce()
    {
        alert('Фамилия и имя студента ' + this.name + ' ' + this.second_name);
    }
    
    this.info = function info()
    {
        document.write('<br>Информация о студенте:' + '<br>Фамилия: ' + this.second_name + '<br>Имя: ' + this.name + '<br>Оценка по физике: ' + this.physics + '<br>Оценка по математике: ' + this.math + '<br>Оценка по информатике: ' + this.informatics);
    }
}
}
Student.prototype.name="Vika"

    let stud1 = new Student('Виктория', 'Шманай', 10, 9, 10);
    let stud2 = new Student('Яна', 'Шидловская', 10, 8, 10 );
    let stud3 = new Student('Карианна', 'Адамович', 8, 10, 9);
    
    stud1.info();
    stud1.avg_rating();
    document.write('');
    stud2.info();
    stud2.avg_rating();
    document.write('');
    stud3.info();
    stud3.avg_rating();
    document.write('');
    
    //Третье задание
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arr);
    delete arr[3];
    console.log(arr);
    
    console.log(1 in arr);
    console.log('add_stud' in Gruppa);       //in-есть ли некоторое свойство у того или иного объекта
    console.log(arr instanceof Array);
    console.log(stud1 instanceof Object);    //instaceof-принадлежит ли некоторый объект объектной модели js
    console.log(isit3 instanceof String);
    
    function return5()
    {
        return 5;
    }
    
    console.log(typeof Gruppa);
    console.log(typeof Gruppa.prototype.name);         //prototype-добавляет новые свойства
    console.log(typeof Gruppa.prototype.add_stud);
    console.log(typeof Gruppa.prototype.sub_stud);
    console.log(typeof isit3.add_stud);
    console.log(typeof isit3.sub_stud);
    console.log(typeof isit3);
    console.log(typeof Student);
    console.log(typeof Student.prototype.avg_rating);
    console.log(typeof Student.prototype.introduce);
    console.log(typeof Student.prototype.info);
    console.log(typeof stud1);
    console.log(typeof stud1.name);
    console.log(typeof stud1.second_name);
    console.log(typeof stud1.physics);
    console.log(typeof stud1.math);
    console.log(typeof stud1.informatics);
    console.log(typeof arr);
    console.log(typeof return5);    