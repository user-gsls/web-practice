// var v=document.getElementById("myVideo");
// function playPause(){
// 	if(v.paused)
// 		v.play();
// 	else
// 		v.pause();

// }
$(function () {

    setTimeout(function () {

        $(".banner2").addClass("animated flipInX ").removeClass("fade")

    }, 800);

})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#contain_mid1").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b10").addClass(" animated zoomIn ").removeClass("fade")
	}
	else{
		$(".b10").removeClass(" animated zoomIn ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#contain_mid2").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b11").addClass(" animated zoomIn ").removeClass("fade")
	}
	else{
		$(".b11").removeClass(" animated zoomIn ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#contain_mid3").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b12").addClass(" animated zoomIn ").removeClass("fade")
	}
	else{
		$(".b12").removeClass(" animated zoomIn ").addClass("fade")
	}
})
// $(window).scroll(function(){
// 	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
// 	var backTop = $(".b13").offset().top - $(window).height()/2;
// 	if(scrollT>(backTop - 450)){
// 		$(".b13").addClass(" animated zoomIn ").removeClass("fade")
// 	}
// 	else{
// 		$(".b13").removeClass(" animated zoomIn ").addClass("fade")
// 	}
// })
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b14").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b14").addClass(" animated bounceIn ").removeClass("fade")
	}
	else{
		$(".b14").removeClass(" animated bounceIn ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b15").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b15").addClass(" animated fadeInLeftBig ").removeClass("fade")
	}
	else{
		$(".b15").removeClass(" animated fadeInLeftBig ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b16").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b16").addClass(" animated fadeInLeftBig ").removeClass("fade")
	}
	else{
		$(".b16").removeClass(" animated fadeInLeftBig ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b17").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b17").addClass(" animated fadeInRight ").removeClass("fade")
	}
	else{
		$(".b17").removeClass(" animated fadeInRight ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b18").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b18").addClass(" animated fadeInLeft ").removeClass("fade")
	}
	else{
		$(".b18").removeClass(" animated fadeInLeft ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b19").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 450)){
		$(".b19").addClass(" animated animated flipInY ").removeClass("fade")
	}
	else{
		$(".b19").removeClass(" animated animated flipInY ").addClass("fade")
	}
})