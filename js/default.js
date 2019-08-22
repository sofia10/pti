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
    $('li.active').click(function(){
        $('.lang').toggleClass('active');
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

function remindButton(){
    $('.button-bg').click(function() {
        $(this).toggleClass('active');
    });
}
function showMap(){
    $('.map-btn').click(function(){
        $('#map').toggleClass('active');
        $(this).toggleClass('active');
    });
}
function steps(){
    $('.first_btn').click(function(){
       $('.first_process').removeClass('active');
        $('.step1_row').addClass('active');
    });


    $('.step2_btn').click(function(){
        $('.step2_row').removeClass('active');
        $('.step3_row').addClass('active');
    });
    $('.step3_btn').click(function(){
        $('.step3_row').removeClass('active');
        $('.step4_row').addClass('active');
    });
    $('.step4_btn').click(function(){
        $('.step4_row').removeClass('active');
        $('.step5_row').addClass('active');
    });

    $('.back_to1').click(function(){
        $('.step2_row').removeClass('active');
        $('.step1_row').addClass('active');
    });

    $('.back_to2').click(function(){
        $('.step3_row').removeClass('active');
        $('.step2_row').addClass('active');
    });

    $('.back_to3').click(function(){
        $('.step4_row').removeClass('active');
        $('.step3_row').addClass('active');
    });

    $('.cam-button').click(function(){
        $(this).closest('.step_content').find('.text-block').hide();
        $(this).closest('.step_content').find('.mini-map-init').removeClass('active');
        $(this).closest('.step_content').find('.video').show();
        $(this).removeClass('active');
    });
    $('.map-button').click(function(){
        $(this).closest('.step_content').find('.text-block').hide();
        $(this).closest('.step_content').find('.video').hide();
        $(this).closest('.step_content').find('.mini-map-init').addClass('active');
        $(this).removeClass('active');
    });
}

function accountInfo() {
    $('.user-info .EditSymbol').on( "click", function() {
        $(this).closest('.user-info').find('input').removeAttr("disabled");
        $(this).removeClass('active');
        $(this).closest('.edit').find('.check').addClass('active');
    });
    $('.user-info .check').on( "click", function() {
        $(this).closest('.user-info').find('input').attr("disabled", true);
        $(this).removeClass('active');
        $(this).closest('.edit').find('.EditSymbol').addClass('active');
    });
}

function vehicles(){
    $('.vehicles-item').click(function(){
        $('.vehicles-item').removeClass('active');
        $(this).addClass('active');
        var type = $(this).attr('vehicle');
        console.log(type);
        $('.transgeorgia').removeClass('active');
        $('.transgeorgia[transgeorgia='+type+']').addClass('active');
    });

    $('.top').click(function(){
       $(this).closest('.mobile-vehicle').toggleClass('active');
       $(this).find('.arrow').toggleClass('active');
    });
}
vehicles();

function faq(){
    // $('.question').click(function(){
    //     $('.faq-item.active').not(this).removeClass('active');
    //    $(this).closest('.faq-item').toggleClass('active');
    // });

    $(".question").on('click', function(){
        $(this).closest('.faq-item').toggleClass('active').siblings().removeClass('active');
    })
}