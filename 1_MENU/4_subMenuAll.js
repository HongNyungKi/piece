$(function () {
    var $firstMenu = $(".main-menu"),
        $header = $(".menuGroup");

    $firstMenu.mouseover(function () {
        $header.stop().animate({
            height: "300px"
        }, 150);
    })
    $firstMenu.mouseout(function () {
        $header.stop().animate({
            height: "50px"
        }, 150);
    })

})