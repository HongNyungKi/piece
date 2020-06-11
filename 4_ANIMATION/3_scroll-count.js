$(function () {
    $(window).scroll(function () {
        //section2가 화면의 상단에서 떨어진 거리
        var threshold = $(".section2").offset().top;
        if ($(window).scrollTop() >= threshold) {
            var progressRate = $(".animate").attr("data-rate");
            $({
                percent: 0
            }).animate({
                percent: progressRate
            }, {
                duration: 1500
            })
        } else {

        }
    });
});