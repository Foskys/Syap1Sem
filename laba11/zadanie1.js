// 1
$("span").mouseover(function(){
    $(this).css("color", "#FF8029");
});

$("span").mouseout(function(){
    $(this).css("color", "black");
});

// 2
$("span").click(function(){
    if($(this).css("font-size") !== "1.5em") {
        $(this).css("font-size", "1.5em");
    } else {
        $(this).css("font-size", "1em");
    }
});

// 3
$("#img1").click(function(){
    let firstImg = "https://doramy.club/wp-content/uploads/2022/11/policejskij-uchastok-ryadom-s-pozharnoj-chastyu.jpg";
    let secondImg = "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/42525abb-b538-4d91-a941-6e99df3753ba/600x900";
    if ($(this).attr("src") === firstImg) {
        $(this).attr("src", secondImg);
    } else {
        $(this).attr("src", firstImg);
    }
});

// similarly for img2

// 4
$("#p1").click(function(){
    let defaultImg = "https://ponylike.ru/wp-content/uploads/2022/06/00-memy-fanaty-korejskikh-doram.jpg";
    $(this).html('<img src=' + defaultImg + '>');
});

// 5
$("img").mouseover(function(){
    $(this).width(1000);
});

$("img").mouseout(function(){
    $(this).width(500);
});

// 6
$("#p2").dblclick(function(){
    if(!$(this).attr("style")) {
        $(this).css("border", "double #FF8029 5px");
    } else {
        $(this).attr("style", "");
    }
});