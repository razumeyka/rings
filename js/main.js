$(document).ready(function(){

//currency_select
    $('.select .select_field').click(function(){
		$('.select').not($(this).closest('.select')).removeClass('active');
		$(this).parent().toggleClass('active');
	})
	
	$('.select li').click(function(){
        $(this).closest('.select').find('input').val($(this).data('value'));
		$(this).closest('.select').find('.select_field').html($(this).html());
		$(this).closest('.select').toggleClass('active');
	})	 
    
//mobile_menu

    $( '.mobile_menu' ).click( function() { 
        $('header .menu').slideToggle(300);
    });
    
    $( '.mobile_search' ).click( function() { 
        $('.wpcf7').toggleClass('active');
    });

// submenu
    
    $('.menu li').click(function(e){
        if($(this).hasClass('active')){return;}
        e.preventDefault();
        $('.submenu').slideUp('300');
        $('.menu li').removeClass('active');
        $(this).addClass('active');
        $(this).find('.submenu').slideToggle('300');
    }); 
    
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

// fancybox
    
    $('.fancybox').fancybox();
});



