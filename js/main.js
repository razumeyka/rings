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
    
// sub-menu 1279
    
if ( $(window).width() > 1279 ) {
    
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
        height: 485,
        opacity: 1,
    });
    
// slider for insta photos
    
    $('.carousel .next,.carousel .prev').click(function(){
        console.log('click carousel');
        var countslides=jQuery('.content_container').children().children().length-Math.round(parseFloat(jQuery('.content_wrapper').css('width'))/parseFloat(jQuery('.one_doc').css('width')));
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
    
// shipping-details
    
	$('.card__shipping').mouseenter(function () { 	          $(this).find('.card__shipping_details').fadeIn(200); 
	});
	
	$('.card__shipping').mouseleave(function () { 
		$(this).find('.card__shipping_details').fadeOut(200); 
	});
    
// select
    
    $('.filter__select-field').click(function(){
        $(this).closest('.filter').toggleClass('filter_active').find(".filter__inner").fadeToggle(200); 
        if ( $(window).width() > 1023 ) {   
            $('.filter').not($(this).closest('.filter')).removeClass('filter_active').find(".filter__inner").fadeOut(200);    
        } else {
            $(".filters-group").fadeOut(200);
                $(".filters-button").removeClass("filters-button_active");
       $('.filters-mobile').removeClass('active');
            }
      })

        $('.filters-mobile .filters-button').click(function(){
            $(this).toggleClass("filters-button_active");
            $(".filters-group").fadeToggle(200);
            $('.filters-mobile').toggleClass('active');
            $('.filter_sort').removeClass('filter_active').find(".filter__inner").fadeOut(200);
      });
	
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
	
		
	$('.cart__quantity-buttons button').click(function(){
		$input=$(this).closest('.cart__quantity-buttons').find('input');
		if($(this).hasClass('cart__quantity-input_minus')){
			if(parseInt($input.val(),10)-1>parseInt($input.attr('min'),10)) $input.val(parseInt($input.val(),10)-1);
		}
		if($(this).hasClass('cart__quantity-input_plus')){
			$input.val(parseInt($input.val(),10)+1);
		}
	});
});
    



