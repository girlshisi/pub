$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    }
);
$(".tab li:eq(0)").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab li:eq(1)").click(
    function(){
        $(".notice").hide();
        $(".gallery").show();
    }
);
// 추가
$(".tab li a").click(
    function(){
        $(".tab li a").removeClass("on");
        $(this).addClass("on");
    }
);

// popup
$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);