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

// sub-menu 

 $('.menu li.menu-item-has-children>a' ).click(function(e){
	if($('header .button.light_button').is(':visible')){
		e.preventDefault();
		$(this).closest('li').find('.sub-menu').slideToggle(300);
	}
});    

    
if ( $(window).width() > 1279 ) {
		
// fixed menu 1279 		
/*Этого блока более не существует. Может быть дропнем?*/
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
	
// sub-menu 1279
    
	$('.menu li').mouseenter(function () { 
		$(this).find('.sub-menu').fadeIn(200).addClass('active'); 
	});
	
	$('.menu li').mouseleave(function () { 
		$(this).find('.sub-menu').fadeOut(200).removeClass('active'); 
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
    
// filters
    
    $('.filters-button').click(function(){
        $(".filters-group").fadeToggle(200);
        $('.filters-mobile').toggleClass('active');
	})
    
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $("#amount").val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $("#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ));
    
    $('.filter_checkbox .filter__inner input').change(function(){
        $(this).closest('.filter_checkbox .filter__inner label').toggleClass('active');
	})
    
// select
    
    $('.filter__select-field').click(function(){
		$('.filter').not($(this).closest('.filter')).removeClass('filter_active').find(".filter__inner").fadeOut(200);
		$(this).closest('.filter').toggleClass('filter_active').find(".filter__inner").fadeToggle(200);   
	})
	
	$('.filter li').click(function(){
		$(this).closest('.filter').find('select').val($(this).data('value'));
		$(this).closest('.filter').find('.filter__select-field').html($(this).html());
		$(this).closest('.filter').toggleClass('filter_active');
        $(this).closest(".filter__inner").fadeOut(200); 
        
	});
    
    
// question-answer
    
    $(".card__answer").hide();
    $('.card__question').click(function(){
        $(this).next().slideToggle(500);
        $(this).toggleClass('card__question_active');
    });
});
    



