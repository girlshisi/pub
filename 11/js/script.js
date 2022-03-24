$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().fadeIn();
    },
    function(){
        $(this).children(".sub").stop().fadeOut();
    },
);

$(".notice li:er(0) a").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);