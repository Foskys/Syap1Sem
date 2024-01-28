function task51(){
    console.clear();
    const allElements = document.querySelectorAll("*");
    for (let i = 0; i < allElements.length; i++){
        console.log("Тег номер " + (i + 1) + ": " + allElements[i].tagName);
    }
}


function task52(){
    console.clear();
    const childBodyElements = document.body.childNodes;
    for (let i = 0; i < childBodyElements.length; i++){
        console.log("Дочерний элемент номер " + (i + 1) + ": " + childBodyElements[i].nodeName);
    }
}

function task53(){
    console.clear();
    const allElements = document.querySelectorAll("*");
    for (let i = 0; i < allElements.length; i++){
        if (allElements[i].tagName === "SPAN") {
            alert("Задание №1 " + allElements[i].textContent);
        }
    }

    const spanElements = document.querySelectorAll("span");
    if (spanElements)
        alert("Задание №2 " + spanElements[0].textContent);
    else
        alert("Задание №3 Span элементов нет");

    const span2Element = document.getElementById("spanId2");
    if (span2Element)
        alert("Задание №3 " + span2Element.textContent);
    else
        alert("Задание №3 элементов с таким айди нет");

}

function task54(){
    console.clear();
    const tableElements = document.querySelectorAll("table");
    if (!tableElements) {
        alert("Нет таблицы на странице");
        return;
    }
    const tableElement = tableElements[0];
    let sumNumbers = 0;
    let countOfNumbers = 0;
    for(let i = 0; i < tableElement.rows.length; i++) {
        if (tableElement.rows[i].childElementCount !== 4)
            continue;

        let thElements = tableElement.rows[i].children
        let value = thElements[2].textContent;
        if (Number(value)) {
            countOfNumbers += 1;
            sumNumbers += Number(value);
        }
    }
    const span2Element = document.getElementById("spanId2");
    if (!span2Element){
        alert("Задание №4 спан элементов с таким айди нет");
        return;
    }

    if (!countOfNumbers) {
        span2Element.innerText += " 0";
        return;
    }

    span2Element.innerText += " " + (sumNumbers / countOfNumbers);
}