$(function(){
    $('#scroll_up').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
     
    $('#scroll_down').click(function(){
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
        return false;
    });
});





$(function(){
    $('#scroll_up_dark_theme').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
     
    $('#scroll_down_dark_theme').click(function(){
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
        return false;
    });
});