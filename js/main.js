$(document).ready(function(){

//search
   
   $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("form.search"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.search_placeholder').removeClass('disabled');
			$('.search').removeClass('active');
		}
	});
   
	$('.search_text').click( function() { 
		$('.search_input').focus();		
	});
	
	$('.search_icon').click(function(){ 
		if(!$('.search_placeholder').hasClass('disabled')){
			$('.search_input').focus();
		} else{
			$('.search_placeholder').removeClass('disabled');
			$('.search').removeClass('active');
		}
	});	
		
	$('.search_input').focusin(function(){
		$('.search_placeholder').addClass('disabled');
		$('.search').addClass('active');
	}); 
		
    
//currency_select
    
    $('.select .select_field').click(function(){
		$(this).parent().toggleClass('active');
        $('.select ul').slideToggle(300);
	})
    
//mobile_menu
    
    $('.light_button').click( function() { 
        $('header .menu').slideToggle(300);
    });

// submenu 

 $('.menu li.with_submenu>a' ).click(function(e){
	if($('header .button.light_button').is(':visible')){
		e.preventDefault();
		$(this).closest('li').find('.submenu').slideToggle(300);
	}
});    

    
if ( $(window).width() > 1279 ) {
		
// fixed menu 1279 		

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("fixed");
			$(".submenu_background").addClass('fixed');
		}
		else {
			$('header').removeClass("fixed");
			 $(".submenu_background").removeClass('fixed');
		}
	});
	
// submenu 1279
    
	$('.menu li').mouseenter(function () { 
		$(this).find('.submenu').fadeIn(200).addClass('active'); 
	});
	
	$('.menu li').mouseleave(function () { 
		$(this).find('.submenu').fadeOut(200).removeClass('active'); 
	});
		
}
    
// slider  

    $('#coin-slider').coinslider({
        width: 1230,
        height: 500,
        opacity: 1,
    });
    
// slider for insta photos
    
    $('.carousel .next,.carousel .prev').click(function(){
        console.log('click carousel');
        var countslides=jQuery('.review_container').children().children().length-Math.round(parseFloat(jQuery('.review_wrapper').css('width'))/parseFloat(jQuery('.one_doc').css('width')));
        var slide=$(this).closest('.carousel').data('slide');
        console.log(countslides);
        if($(this).hasClass('next')){
            slide++;
            if(slide>countslides)slide=0;
        }
        if($(this).hasClass('prev')){
            slide--;
            if(slide<0)slide=countslides;
        }
         $(this).closest('.carousel').find('.long').css('margin-left','-'+(slide*25)+'%');
		$(this).closest('.carousel').data('slide',slide);
    });
    
// select
    
    $('.card__select-field').click(function(){
		$('.card__select-column').not($(this).closest('.card__select-column')).removeClass('card__select-column_active');
		$(this).parent().toggleClass('card__select-column_active');
	})
	
	$('.card__select-column li').click(function(){
		$(this).closest('.card__select-column').find('select').val($(this).data('value'));
		$(this).closest('.card__select-column').find('.card__select-field').html($(this).html());
		$(this).closest('.card__select-column').toggleClass('card__select-column_active');
	});
    
    
// question-answer
    
    $(".card__answer").hide();
    $('.card__question').click(function(){
        $(this).next().slideToggle(500);
        $(this).toggleClass('card__question_active');
    });
    
// filters
    
    $('.card__select-field_price').click(function(){
		$('.filter-price').toggleClass('filters_active');
	})
    
    $('.card__select-field_material').click(function(){
		$('.filter-checkbox').toggleClass('filters_active');
	})
    
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ));
});



