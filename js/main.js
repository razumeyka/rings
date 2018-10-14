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
});



