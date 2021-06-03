$(document).ready(function(){
    $('#page, #page2, #page3').accordion({
        heightStyle: "fill",
        animate: 500,
        collapsible: true
    });
    $( "#tabs" ).tabs({
        collapsible: true,        
    });

    $('.swipebox').swipebox();

    $('#ui-id-19, #ui-id-20, #ui-id-21').click(function(){
        $('body').css('background', 'url(type-r/TYPE-R-EXTERIOR-1.jpg)');
        $('h1').css('color', 'white');
        $('h1').text('HONDA CIVIC TYPE R')
    });
});