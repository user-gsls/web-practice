$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#introduce").offset().top - $(window).height()/2;
	if(scrollT>(backTop -200) && scrollT<(backTop+1300)){
		$(".a1").addClass("animated fadeInLeftBig ").removeClass("fade")
		$(".a2").addClass("animated fadeInRightBig ").removeClass("fade")
	}
	else{
		$(".a1").removeClass("animated fadeInLeftBig ")
		$(".a2").removeClass("animated fadeInRightBig ")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
	var backTop = $("#performanceTitle").offset().top;
	var onP1 = scrollH - backTop;
	if(scrollT>onP1){
		$(".a3").addClass("animated fadeInUpBig ").removeClass("fade")
		// $(".a4").addClass("animated fadeInUpBig ").removeClass("fade")
		// $(".a5").addClass("animated fadeInUpBig ").removeClass("fade")
	}
	else{
		$(".a3").removeClass("animated fadeInUpBig ").addClass("fade")
		// $(".a4").removeClass("animated fadeInUpBig ")
		// $(".a5").removeClass("animated fadeInUpBig ")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
	var backTop = $("#performanceMain").offset().top;
	var onP2 = scrollH - backTop;
	if(scrollT>onP2){
		// $(".a3").addClass("animated fadeInUpBig ").removeClass("fade")
		$(".a4").addClass("animated fadeInUpBig ").removeClass("fade")
		$(".a5").addClass("animated fadeInUpBig ").removeClass("fade")
	}
	else{
		// $(".a3").removeClass("animated fadeInUpBig ")
		$(".a4").removeClass("animated fadeInUpBig ").addClass("fade")
		$(".a5").removeClass("animated fadeInUpBig ").addClass("fade")
	}
})



$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#galleryChild1").offset().top - $(window).height()/2;
	if(scrollT>(backTop-450)){
		$(".a6").addClass("animated zoomIn ").removeClass("fade")
	}
	else{
		$(".a6").removeClass("animated zoomIn ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#galleryChild2").offset().top - $(window).height()/2;
	if(scrollT>(backTop -450)){
		$(".a7").addClass("animated zoomIn ").removeClass("fade")
	}
	else{
		$(".a7").removeClass("animated zoomIn ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#galleryChild3").offset().top - $(window).height()/2;
	if(scrollT>(backTop -450)){
		$(".a8").addClass("animated zoomIn ").removeClass("fade")
	}
	else{
		$(".a8").removeClass("animated zoomIn ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#galleryChild4").offset().top - $(window).height()/2;
	if(scrollT>(backTop -450)){
		$(".a9").addClass("animated zoomIn ").removeClass("fade")
	}
	else{
		$(".a9").removeClass("animated zoomIn ").addClass("fade")
	}
})

window.onload = function(){
var timer = null;
var toUpper = document.getElementById("toUpper");
toUpper.onclick = function(){
  timer = setInterval(function(){
	var backTop = document.documentElement.scrollTop || document.body.scrollTop;
	var speedTop = backTop/4;
	document.documentElement.scrollTop = backTop - speedTop;
	if(backTop == 0){
		clearInterval(timer);
	}
  },30);
}
window.onmousewheel = function(){
	var backtop=document.documentElement.scrollTop||document.body.scrollTop;
	if(backtop>300){
       	  		toUpper.classList.add("show");
       	  		toUpper.classList.remove("fade");
       	  	}else{
       	  		toUpper.classList.add("fade");
       	  		toUpper.classList.remove("show");
       	  	}
};
}
// $('#pbSlider0').pbTouchSlider({
//     slider_Wrap: '#pbSliderWrap0',
//     slider_Threshold: 10,
//     slider_Speed: 800,
//     slider_Ease:'ease-out',
//     slider_Drag : false,
//         auto:true,//自动播放
//         autoTime:6000,
//     slider_Arrows: {
//       enabled : true
//     },
//     slider_Dots: {
//       class :'.o-slider-pagination',
//       enabled : true,
//       preview : false
//     },
//     slider_Breakpoints: {
//         default: {
//             height: 750
//         },
//         tablet: {
//             height: 500,
//             media: 1024
//         }
//     }
//   });

  var header = document.getElementById("header");
        var headerTop=header.offsetTop;
        window.onscroll=function(){
            var backtop=document.documentElement.scrollTop||document.body.scrollTop;
            if(backtop>=headerTop){
                header.style.position="fixed";
                header.style.top="0";
                header.style.left="0";
                header.style.zIndex="100";

            }else{
                header.style.position="";
                header.style.zIndex="999";
            }
          }



        $(function(){
            //超过一定高度导航添加类名
            var nav=$("header"); //得到导航对象
            var win=$(window); //得到窗口对象
            var sc=$(document);//得到document文档对象。
            nav.addClass("on");
            // nav.removeClass("on");
            win.scroll(function(){
              // if(sc.scrollTop()>=20){
              //   header.style.position = "fixed";
              // }else{
              //   header.style.position="";
              // }
              if(sc.scrollTop()>=90 && sc.scrollTop()<=670){
                // nav.addClass("on");
                nav.removeClass("on");
              }else{
               // nav.removeClass("on");
               nav.addClass("on");
              }
            })
        })
