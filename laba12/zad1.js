// Phonebook data
const phonebook = {
    "1": "+375298652225",
    "2": "+375293666537",
    "3": "+375447374965",
    "4": "+375292160921",
    "5": "+375298723872"
};

let num = prompt("Введите число от 1 до 5, чтобы получить номер: ");
let phoneNum = phonebook[num];
if (phoneNum)
    alert("Вот соответсвующий номер: " + phoneNum);
else
    alert("Введенное вами значение не соотвествует ни одному номеру");
