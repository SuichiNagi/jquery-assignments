$(document).ready(function(){
    $('img').click(function(){
        var $target = $(this).attr('data-alt-src');
                $(this).attr('data-alt-src', $(this).attr('src'));
                $(this).attr('src', $target);           
    });   
});