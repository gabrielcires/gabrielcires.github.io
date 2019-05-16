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

        // Assign active class to nav links while scrolling
        $('.section-display').each(function (i) {
            if ($(this).position().top <= scrollDistance + 150) {
                $('.menu-list li a.active').removeClass('active');
                $('.menu-list li a').eq(i).addClass('active');
            }
        });
    }).scroll();

}

function showFooter(x) {
    let footer = document.getElementById("footer");

    x.classList.toggle("minus");
    footer.classList.toggle("show");
};

//Appear js
let animElement =  document.getElementsByClassName('pre-anim');

appear({
    init: function init(){
      console.log('dom is ready');
    },
    elements: function elements(){
      return animElement;
    },
    appear: function appear(el){
        el.classList.add("do-anim");
      },
    bounds: -200,
  });