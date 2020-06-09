$(function () {
    var progressWrap = $(".progress-bar"),
        progressBar = progressWrap.find(".bar"),
        progressText = progressWrap.find(".rate"),
        progressRate = progressText.attr("data-rate");

    progressBar.animate({
        width: progressRate + "%"
    }, 2500);

    setInterval(textAnimation, 1000 / 10);

    function textAnimation() {
        var currentRate = progressBar.width() / progressWrap.width() * 100;
        progressText.text(Math.ceil(currentRate) + "%");
    }
})