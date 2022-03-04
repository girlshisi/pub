$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown(600);
        $(".nav_back").stop().slideDown(600);
    },
    function(){
        $(".sub").stop().slideUp(300);
        $(".nav_back").stop().slideUp(300);

    }
);


$(".open").click(
    function(){
        // $("#popup").show();
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        // $("#popup").hide();
        $("#popup").fadeOut();
    }
);