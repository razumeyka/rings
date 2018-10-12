$(document).ready(function(){

//search
    
    $('.search').click( function() { 
        $('.search').addClass('active');
        $('.search input').focus();
    });
    
//currency_select
    
    $('.select .select_field').click(function(){
		$(this).parent().toggleClass('active');
        $('.select ul').slideToggle(500);
	})
    
//mobile_menu
    
    $('.mobile_menu').click( function() { 
        $('header .menu').slideToggle(300);
    });

// submenu
    
//      $('.menu li').mouseover(function () {
//       $(".submenu_background").toggleClass('active');
//      });

//   	$('.menu li' ).click(function(){
//        $(this).find('.submenu').slideToggle(300);
//        $(".submenu_background").slideToggle(300);
//    });	
    
// fixed menu  
    
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
    
    $('.select_field').click(function(){
		$('.card_details_options_select').not($(this).closest('.card_details_options_select')).removeClass('active');
		$(this).parent().toggleClass('active');
	})
	
	$('.card_details_options_select li').click(function(){
		$(this).closest('.card_details_options_select').find('input').val($(this).data('value'));
		$(this).closest('.card_details_options_select').find('.select_field').html($(this).html());
		$(this).closest('.card_details_options_select').toggleClass('active');
	});
    
// question-answer
    
    $(".card__answer").hide();
    $('.card__question').click(function(){
            $(this).next().slideToggle(500);
            $(this).toggleClass('card__info_active');
    });

});



