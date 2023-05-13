$(document).ready(function(){
  $(".menu-nav").hover(function(){
    $(this).find(".sub_all").stop().slideDown();
    $(".nav-box").stop().slideDown();
  },function(){
    $(this).find(".sub_all").stop().slideUp();
    $(".nav-box").stop().slideUp();
  });

  let $img = $(".main-image ul li");
  let $lbtn = $(".side-btn .lbtn");
  let $rbtn = $(".side-btn .rbtn");
  let oldidx=0;
  let idx=0; 
  let img_n = $img.length; 

  //이미지 바뀌는 함수
  function changeImg(idx){ 

    if(oldidx != idx){
      $img.eq(oldidx).stop().fadeOut("500");
      $img.eq(idx).stop().fadeIn("500");
    
    }
    oldidx = idx;
  };

  //자동함수
  function changeAuto(){
    idx++;
    if(idx>img_n-1){ 
      idx=0;
    };
    changeImg(idx);
  };
  timer=setInterval(changeAuto,5000);

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx>img_n-1){
      idx=0;
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);
  });
  $lbtn.click(function(){
    clearInterval(timer);
    idx--;
    if(idx<0){
      idx=img_n-1; 
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);
  });

/* 탭메뉴2  */
  $(".tab-btn li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabcnts .tabs").removeClass("active");
    $("#" + result).addClass("active").hide().fadeIn(); 
  });

    /* 스크롤 */
    $(".top-btn").hide();
    $(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 1200){
          $(".top-btn").fadeIn();
			}else {
				$('.top-btn').fadeOut();
        }
      });    
    });
});