let spans = document.querySelectorAll("span");
for(let i = 0; i < spans.length; i++){
// 1
spans[i].onmouseover = function (){
spans[i].style.color = "#234567";
};

spans[i].onmouseout = function (){
spans[i].style.color = "black";
};

// 2
spans[i].onclick = function (){
if(spans[i].style.fontSize !== "1.5em")
spans[i].style.fontSize = "1.5em";
else
spans[i].style.fontSize = "1em";
};
}

// 3
let img1 = document.getElementById("img1");
img1.onclick = () => {
let firstImg = "https://img3.labirint.ru/rc/b0096bee48d744624e2378d5638398cc/363x561q80/books45/444899/cover.jpg?1613060730";
let secondImg = "https://jungle.by/sites/default/files/styles/product/public/products/elastika.jpeg?itok=mU7eKe1J";
if (img1.src === firstImg)
img1.src = secondImg;
else
img1.src = firstImg;
};

// 4
let p1 = document.getElementById("p1");
p1.onclick = () => {
let defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefggckbG1G-9IOzXWn231t5KpdiI3wNdXDg&usqp=CAU";
p1.innerHTML = '<img src= ' + defaultImg + ' alt="" >';
};

// 5
let imgs = document.querySelectorAll("img");
for(let i = 0; i < imgs.length; i++){
imgs[i].onmouseover = function (){
imgs[i].width = "1000";
};

imgs[i].onmouseout = function (){
imgs[i].width = "500";
};
}

// 6
let p2 = document.getElementById("p2");
p2.ondblclick = () => {
if(!p2.style.border)
p2.style.border = "double #098765 60px";
else
p2.style.border = "";
};