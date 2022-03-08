$(document).ready(function () {
    $(".accordion ul li").mouseenter(function () { 
        $(this).css("width", "600px");
        $(this).siblings().css("width", "49px")
        
    });
});