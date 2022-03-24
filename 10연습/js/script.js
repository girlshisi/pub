$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
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