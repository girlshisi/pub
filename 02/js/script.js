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

/* tab */
$(".tab1").click(  /*   공지사항 클릭하면 */
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(  /* 겔러리 클릭하면 */
    function(){
        $(".notice").hide();
        $(".gallery").show();
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
        $("#popup").fadeout();
    }
);