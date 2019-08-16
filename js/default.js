$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();
});

function language(){
    $('.lang li.active').css("order", "1");
    $('li.active a').click(function(ev){
        ev.preventDefault()
    });
    $(window).click(function(){
        $('.lang').removeClass('active');
    });
    $('.lang').click(function(){
        $(this).addClass('active');
        event.stopPropagation();
    });
}
language();

function dropdown(){
    $('.dropdown-item').click(function(){
        var text = $(this).html();
        $(this).closest('.dropdown').find('span').html(text);
    })
}
dropdown();

function login(){
    $('.reg').click(function(){
        $('.login-block').removeClass('active');
        $('.reg-block').addClass('active');
        $(this).addClass('active');
        $('.log').removeClass('active');
    });
    $('.log').click(function(){
        $('.reg-block').removeClass('active');
        $('.login-block').addClass('active');
        $(this).addClass('active');
        $('.reg').removeClass('active');
    });
}

function navigation(){
    $('.burger-btn').click(function(){
        $('.burger-menu').addClass('active');
    });
    $('.CloseMenu').click(function(){
        $('.burger-menu').removeClass('active');
    });
}
navigation();