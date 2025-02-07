 $(function(){

  $(".pager>ul>li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
})
    $('.autoplay').slick(
      {dots: true,
        autoplay: true,
        utoplaySpeed: 1000,
        
      }
    );
    });
    // $('.autoplay').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // });
          


 
