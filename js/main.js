$(document).ready(function(){

//mobile_menu

    $( '.mobile_menu' ).click( function() { 
        $(this).toggleClass('active'); 
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
        height: 470,
        opacity: 1,
    });
});


