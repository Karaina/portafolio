(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){

  $('.modal').modal()

  $('.parallax').parallax();

  $(window).scroll(function(){
    if($(window).scrollTop()>300){
    $('nav').removeClass('red');
  }else{
    $('nav').removeClass('red');
  }
  $('.sidenav').sidenav();
  
  $('.slider').slider();
});

$('.pushpin').pushpin();


});


     
$('.pushpin-demo-nav').each(function() {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

/*función de icono para copiar texto*/
let clipboard = new Clipboard('.far fa-copy');

clipboard.on('success', function(e) {
    console.info('Accion:', e.action);
    console.info('Texto:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Accion:', e.action);
    console.error('Trigger:', e.trigger);
});


/*función para copiar
*/
var boton = document.querySelector('.far fa-copy');
 
boton.addEventListener('click', function(event) {
  // seleccionar el texto de la dirección de email
  var email = document.querySelector('.email');
  var range = document.createRange();
  range.selectNode(email);
  window.getSelection().addRange(range);
 
  try {
    // intentar copiar el contenido seleccionado
    var resultado = document.execCommand('copy');
    console.log(resultado ? 'Email copiado' : 'No se pudo copiar el email');
  } catch(err) {
    console.log('ERROR al intentar copiar el email');
  }
 
  // eliminar el texto seleccionado
  window.getSelection().removeAllRanges();
  // cuando los navegadores lo soporten, habría
  // que utilizar: removeRange(range)
});

/*tostadas*/
M.toast({html: '¡Copiado a portapapeles!'})