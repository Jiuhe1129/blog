window.onload = function () {
    $("*").css("opacity", "1");
    $(".nav").css("top", "0");
    $(".slice.left").css("left", "0");
    $(".slice.right").css("right", "0");
    $(".main-nr").css("left", "0")

    var s1 = '2022-6-19';
    s1 = new Date(s1.replace(/-/g, "/"));
    s2 = new Date();
    var days = s2.getTime() - s1.getTime();
    var time = parseInt(days / (1000 * 60 * 60 * 24));
    document.getElementById('time').innerHTML = "距离大一期末放暑假已经过了" + '<span>' + time + '</span>' + "天";

}

$(window).scroll(function () {
    var top = $(window).scrollTop();
    console.log(top);

    if (top >= 105) {
        $(".main").css("background", "#141414")
    } else {
        $(".main").css("background", "#fff")
    }

    if (top >= 800) {
        $(".main-nr").css("left", "0")
    } else {
        $(".main-nr").css("left", "1900px")

    }
})