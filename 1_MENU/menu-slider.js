$(function () {
    $(".first").on("click", function () {
        $(".first").addClass("active");
        $(".second").removeClass("active");
        $(".third").removeClass("active");
        $(".fourth").removeClass("active");
        $("#line").addClass("one");
        $("#line").removeClass("two");
        $("#line").removeClass("three");
        $("#line").removeClass("four");
        $("#shoppingCart").addClass("active");
        $("#pay").removeClass("active");
        $("#like").removeClass("active");
        $("#question").removeClass("active");
    });

    $(".second").on("click", function () {
        $(".first").removeClass("active");
        $(".second").addClass("active");
        $(".third").removeClass("active");
        $(".fourth").removeClass("active");
        $("#line").removeClass("one");
        $("#line").addClass("two");
        $("#line").removeClass("three");
        $("#line").removeClass("four");
        $("#shoppingCart").removeClass("active");
        $("#pay").addClass("active");
        $("#like").removeClass("active");
        $("#question").removeClass("active");
    });

    $(".third").on("click", function () {
        $(".first").removeClass("active");
        $(".second").removeClass("active");
        $(".third").addClass("active");
        $(".fourth").removeClass("active");
        $("#line").removeClass("one");
        $("#line").removeClass("two");
        $("#line").addClass("three");
        $("#line").removeClass("four");
        $("#shoppingCart").removeClass("active");
        $("#pay").removeClass("active");
        $("#like").addClass("active");
        $("#question").removeClass("active");
    });

    $(".fourth").on("click", function () {
        $(".first").removeClass("active");
        $(".second").removeClass("active");
        $(".third").removeClass("active");
        $(".fourth").addClass("active");
        $("#line").removeClass("one");
        $("#line").removeClass("two");
        $("#line").removeClass("three");
        $("#line").addClass("four");
        $("#shoppingCart").removeClass("active");
        $("#pay").removeClass("active");
        $("#like").removeClass("active");
        $("#question").addClass("active");
    });

})