$(function () {
    var progressWrap = $(".progress-bar"),
        progressBar = progressWrap.find(".bar"),
        progressText = progressWrap.find(".rate"),
        progressRate = progressText.attr("data-rate");

    progressBar.animate({
        width: progressRate + "%"
    }, 1500);

    var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
    progressText.animateNumber({
        number: progressRate,
        numberStep: percent_number_step
    }, {
        easing: 'swing',
        duration: 1500
    });
});