$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b1").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 550)){
		$(".b1").addClass(" animated fadeInRightBig ").removeClass("fade")
	}
	else{
		$(".b1").removeClass(" animated fadeInRightBig ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b2").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 550)){
		$(".b2").addClass(" animated fadeInRightBig ").removeClass("fade")
	}
	else{
		$(".b2").removeClass(" animated fadeInRightBig ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b3").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 650)){
		$(".b3").addClass(" animated fadeInUp ").removeClass("fade")
	}
	else{
		$(".b3").removeClass(" animated fadeInUp ").addClass("fade")
	}
})

$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b10").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 650)){
		$(".b4").addClass(" animated fadeInUp ").removeClass("fade")
	}
	else{
		$(".b4").removeClass(" animated fadeInUp ").addClass("fade")
	}
})

$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b5").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 650)){
		$(".b5").addClass(" animated fadeInUp ").removeClass("fade")
	}
	else{
		$(".b5").removeClass(" animated fadeInUp ").addClass("fade")
	}
})
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $(".b11").offset().top - $(window).height()/2;
	if(scrollT>(backTop - 650)){
		$(".b6").addClass(" animated fadeInUp ").removeClass("fade")
	}
	else{
		$(".b6").removeClass(" animated fadeInUp ").addClass("fade")
	}
})