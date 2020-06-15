$(function () {
    var $firstMenu = $(".main-menu"),
        $header = $("header"),
        $headerHeight = $header.outerHeight();

    $firstMenu.mouseenter(function () {
        var subHeight = $(this).find(".sub-menu").outerHeight();
        $header.stop().animate({
            height: $headerHeight + subHeight + "px"
        }, 300);
    });
    $firstMenu.mouseleave(function () {
        $header.stop().animate({
            height: $headerHeight + "px"
        }, 300);
    });
});