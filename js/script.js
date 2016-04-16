$(document).ready(function() {
    // Stuff to do as soon as the DOM is ready
    $(window).scroll(function(){
        if ($(window).scrollTop() > 200) {
            $('.nav-humb').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 200) {
            $('.nav-humb').removeClass('navbar-fixed');
        }
    });
});


/** Twitter widget**/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
