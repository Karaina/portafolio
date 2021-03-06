var instance = M.Parallax.getInstance(elem);

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.parallax').parallax();
  $('.modal').modal()

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
