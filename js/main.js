$(document).ready(function(){

//search
    
    $('.search .icon').click( function() { 
        $('.search').toggleClass('active');
        $('.search .input').focus( function() {
            $('.search').addClass('focus');
        });
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



