window.addEventListener("load", titleUp);
window.addEventListener("wheel", onWheel);

var $content = document.querySelector(".content");

var title = document.querySelector(".title");
// var title = $(".title");

function titleUp(){
    title.classList.add("on");
    // title.addClass("on");
}

function onWheel(){
    if(scrollY > 120){
        $content.classList.add("on");      
    }else{
        $content.classList.remove("on");      
    }
}

