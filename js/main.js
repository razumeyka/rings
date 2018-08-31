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



