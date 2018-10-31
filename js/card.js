$(document).ready(function(){
	var initialX=0;
	var currentX=0;
	var offsetX=0;
	$('.slides_list a').click(function(e){
		
		e.preventDefault();
		if($('.big_image .img').is(':visible')){
			$('.big_image .img').css('background','url('+$(this).attr('href')+') no-repeat center').css('background-size','cover');
		}
	});
	
	$('.super_slider').on("touchstart", function(e){
		$('.slides_list').addClass('notrans');
		 initialX = e.touches[0].clientX - offsetX;
		 console.log('dragstart');
	});
	$('.super_slider').on("touchmove", function(e){
		e.preventDefault();
		if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
        } else {
          currentX = e.clientX - initialX;
        }
		
		$('.slides_list').css('transform','translateX('+currentX+'px)')
		
	});
	$('.super_slider').on('touchend',function(e){
		e.preventDefault();
		$('.slides_list').removeClass('notrans');
		var width=500;//Надо сделать по-человечески
		var count=3-1;
		var slide=Math.round(currentX/width);
		if(slide>0)slide=0;
		if(slide<-count) slide=-count;
		currentX=slide*width;
		$('.slides_list').css('transform','translateX('+currentX+'px)')
		offsetX=currentX;
	})
});