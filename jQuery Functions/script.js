$(document).ready(function(){
    $('.add').click(function(){
        $('p').addClass("red");
    });

    $('.slide').click(function(){
        $('img').slideToggle(3000, 'swing');
        $('p').toggle();
    })

    $('.append').click(function(){
        $('div').append($('p'));
        $('h1').html("Hello World")
    });

    $('h1').click(function(){
        $(this).hide();
    })

    $('p').click(function(){
        $('h1').show();
        $('p').before("Hiiiii");
        $('P').after("Hello");
    })

    $('.out').click(function(){
        $('p').fadeOut();
    })

    $('.in').click(function(){
        $('p').fadeIn();
    })

});