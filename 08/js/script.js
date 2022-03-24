$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $(".nav_back").stop().slideDown();

    },
    function(){
        $(".sub").stop().slideUp();
        $(".nav_back").stop().slideUp();

    }
);
$(".notice li:eq(0) a").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);




$(".family select").change(
    function(){
        var $url = $(this).val();
        window.open($url);
    }
);