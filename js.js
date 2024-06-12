$(function(){
    $(".pager>ul>li").click(function(){
         $(this).addClass("on").siblings().removeClass("on");
    })
    });