jQuery(document).on('click', '.js-videoPoster', function(e) {
    e.preventDefault();
    var poster = $(this);
    var wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
});

function videoPlay(wrapper) {
    var iframe = wrapper.find('.js-videoIframe');
    var src = iframe.data('src');
    wrapper.addClass('videoWrapperActive');
    iframe.attr('src', src);
}


function openNav() {
    document.getElementById("myNav").style.width = "100%";
    console.log("ddd");
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


jQuery("#back-top").hide();

jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#back-top').fadeIn();
        } else {
            jQuery('#back-top').fadeOut();
        }
    });

    jQuery('#back-top a').click(function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

function scroll() {

    var scrollTop = jQuery(window).scrollTop();
    var height = jQuery(window).height();
    var extra = 0;
    var scroll_up_offset = jQuery(".site-footer").offset().top + 30;

    if ((scrollTop + height) >= scroll_up_offset) {
        jQuery('#back-top').css({
            'position': 'absolute',
            'top': jQuery(".site-footer").offset().top - jQuery("#back-top").height() - 90 - extra
        });
    } else {
        jQuery('#back-top').css({
            'position': 'fixed',
            'top': 'auto'
        });
    }

}
jQuery(window).scroll(function() {
    scroll();
});