/* Javascript */

/* Windows scroll */
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
});

$(document).ready(function() {
    
    // Typing animation 
    new Typed('#type-it', {
        strings: ['Analista', 'Desenvolvedor', 'Programador'],
        typeSpeed: 100,
        loop: true
    });
});