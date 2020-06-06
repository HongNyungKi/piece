$(function () {
    var win = $(window),
        header = $(".page-header"),
        headerOffsetTop = header.offset().top;

    win.scroll(function () {
        if (win.scrollTop() >= headerOffsetTop) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    })
})