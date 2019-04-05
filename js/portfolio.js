window.onload = function () {
    // prueba de animaciones
    // setTimeout(function(){
    //     var a = document.getElementById("iniAnim");
    //     a.className += " anim";       
    // }, 3500);

    // smothscroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });


    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $('.section-display').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.menu-list li a.active').removeClass('active');
                $('.menu-list li a').eq(i).addClass('active');
            }
        });
    }).scroll();

}