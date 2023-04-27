//Alerta de bienvenida
alert("Hola Bienvenid@ a nuestro sitio web. No dudes en contactarnos ante cualquier duda.");

//Smooth scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
    window.location.hash = hash;
    });
    }
    });
});

