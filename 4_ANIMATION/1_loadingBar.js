$(function () {
    var progressWrap = $(".progress-bar"),
        progressBar = progressWrap.find(".bar"),
        progressText = progressWrap.find(".rate"),
        progressRate = progressText.attr("data-rate");

    progressBar.animate({
        width: progressRate + "%"
    }, 2500);
    progressText.text("0%");
})