/* Crude defence from simple email harvesters */
function my_message_addr(subject) {
    // http://www.columbia.edu/kermit/utf8-t1.html
    var protocol = "\x6f\x74\x6c\x69\x61\x6d".split('').reverse().join('');
    var addr = "\x72\x6f\x62\x40\x61\x6c\x74\x61\x62\x79\x74\x65.com";

    if (subject != null) {
        subject.replace(" ", "%20");
        addr += "?subject=" + subject;
    }

    return protocol + ":" + addr;
}

/*
 * Ideally this would be within an anchor mouseover event, but then I would not be able to
 * receive emails from mobile devices?
 */
$("a.message").attr("href", my_message_addr("Message from RobGraham.me web site"));


/*
 * Allow elements to smoothly slide onto page during scrolling.
 * @see .slide-up SCSS attributes.
 */
$(window).scroll(function() {
    $(".slide-up-animation").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide-up");
        }
    });
});
/*
 * Slide up all elements that should be visible on the page without initial scrolling.
 * Prevents permanent hiding of elements on pages that are too short to scroll.
 */
$(".slide-up-animation").each(function(){
    if ($(this).offset().top < $(window).height()) {
        $(this).addClass("slide-up");
    }
});