$(function () {
    //변수 지정
    var slides = $(".slideShow img"),
        slidesCount = slides.length,
        currentIndex = 0;
    //해당시간이 지나면 한번만 할일
    //var 변수이름 = setTimeout(할일,시간);
    //clearTimeout(변수이름);

    //일정시간 마다 할일 
    //var 변수이름 = setInterval(할일,시간);
    //clearInterval(변수이름)
    slides.eq(currentIndex).fadeIn();
    var timer = setInterval(showNextSlide, 1000);

    function showNextSlide() {
        //현재 슬라이드 사라지고.
        //다음 슬라이드 나타난다.
        var nextIndex = (currentIndex + 1) % slidesCount;
        slides.eq(currentIndex).fadeOut();
        slides.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
        console.log(currentIndex);
    }
});