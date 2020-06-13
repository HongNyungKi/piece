$(function () {
    var $menu = $(".top_menu ul li"),
        $contents = $(".contents div");



    $menu.click(function (e) {
        e.preventDefault();

        // $menu를 클릭하면 해당 요소에만 class on이 추가되도록하기
        // 1. 첫번째 방법
        // $menu.removeClass("on");
        // $(this).addClass("on");

        // 2. 두번째 방법
        // $(this).addClass("on").siblings().removeClass("on");

        // 클린한 요소의 index번호 가져오기 후 scroll animate적용
        var idx = $(this).index();
        var section = $contents.eq(idx);
        var sectionDistance = section.offset().top;

        $("html,body").stop().animate({
            //보통 html,body를 둘다 선택자로 지정한다.
            //animate메소드를 사용할땐 하고있는 기능을 멈추기 위한 stop()메소드를 사용한다.
            scrollTop: sectionDistance
        })

        //직접 스크롤시 메뉴 강조 자동 변환되기
        // :각각의 $contents가 화면상단에서의 거리 sectionDistance보다 스크롤양이 먾은지 적은지, 많다는 조건이 참이면 각요소마다 순번 변수명을 만들고, 그 순번에 해당하는 메뉴에 클래스 on 추가
        $(window).scroll(function () {
            $contents.each(function () {
                if ($(this).offset().top <= $(window).scrollTop()) {
                    var idx = $(this).index();
                    $menu.removeClass("on");
                    $menu.eq(idx).addClass("on");
                }
            })
        })
    });
});