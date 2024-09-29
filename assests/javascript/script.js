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

    //Owl Carrossel;
    $('.owl-carousel').owlCarousel({
        loop: true,
        items:2,
        margin: 30, 
        autoplay: true,
        autoplayTimeOut: 5000,
        responsive: {
            0: {
                items:1
            },
            900: {
                items:2
            }
        }
    })

    //One Page Scroll
    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
      });
});