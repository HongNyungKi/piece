$(function () {
    var excuted = false;

    $(window).scroll(function () {
        var threshold = $(".section2").offset().top - 550;

        if (!excuted) {
            if ($(window).scrollTop() >= threshold) {
                var progressRate = $(".animate").attr("data-rate");
                $({
                    percent: 0
                }).animate({
                    percent: progressRate
                }, {
                    duration: 1200,
                    progress: function () {
                        var now = this.percent;
                        $(".animate").text(Math.ceil(now) + "%");
                    }
                });
                excuted = true;
            }
        }
    })
});