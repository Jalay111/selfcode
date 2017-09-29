$(document).ready( function() {
    var menu = $('#menu');
    var menu_offset = menu.offset();

    $(window).on('scroll', function() {

        if($(window).scrollTop() > menu_offset.top) {
          menu.addClass('menu-fijo');
        } else {
          menu.removeClass('menu-fijo');
        }

      });
})