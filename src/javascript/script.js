$(document).ready(function() {
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  $(window).on('scroll', function () {
      const header = $('header');
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      let activeSectionIndex = 0;

      if (scrollPosition <= 0) {
          header.css('box-shadow', 'none');
      } else {
          header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
      }

      sections.each(function(i) {
          const section = $(this);
          const sectionTop = section.offset().top - 96;
          const sectionBottom = sectionTop+ section.outerHeight();

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              activeSectionIndex = i;
              return false;
          }
      })

      navItems.removeClass('active');
      $(navItems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('#cta', {
      origin: 'left',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('#cta2', {
      origin: 'right',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('#cta3', {
      origin: 'left',
      duration: 1000,
      distance: '20%'
  })

  ScrollReveal().reveal('#cta4', {
      origin: 'right',
      duration: 1000,
      distance: '20%'
  })
  ScrollReveal().reveal('#cta5', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
    })

    const dataFinal = new Date("2025-08-09T17:00:00").getTime();

    const atualizarContagem = setInterval(function() {
      const agora = new Date().getTime();
      const tempoRestante = dataFinal - agora;
  
      if (tempoRestante <= 0) {
        clearInterval(atualizarContagem);
        $("#countdown").html("<h2>Tempo esgotado!</h2>");
      } else {
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
  
        $("#dias").text(dias.toString().padStart(2, '0'));
        $("#horas").text(horas.toString().padStart(2, '0'));
        $("#minutos").text(minutos.toString().padStart(2, '0'));
        $("#segundos").text(segundos.toString().padStart(2, '0'));
      }
    }, 1000);
});