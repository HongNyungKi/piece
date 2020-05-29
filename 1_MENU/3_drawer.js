$(function () {
    var $aside = $("aside"),
        $button = $aside.find("button"),
        $duration = 300;

    $button.click(function () {
        $aside.toggleClass("open");
        if ($aside.hasClass("open")) {
            $aside.stop().animate({
                left: "0px"
            }, $duration);
            $button.find("i").attr("class", "fas fa-arrow-left")
        } else {
            $aside.stop().animate({
                left: "-350px"
            }, $duration);
            $button.find("i").attr("class", "fas fa-arrow-right")
        }
    })
});