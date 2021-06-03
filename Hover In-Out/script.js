$(document).ready(function(){
    $('img').hover(function(){
            $(this).fadeOut(function(){
                var $target = $(this).attr('src');
                $(this).attr('src', $(this).attr('data-alt-src'));
                $(this).attr('data-alt-src', $target);
            });
            $(this).fadeIn();
        });
});