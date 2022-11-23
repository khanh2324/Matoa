$(document).ready(function () {
    $(".btn__scroll").fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".btn__scroll").fadeIn();
        } else {
            $(".btn__scroll").fadeOut();
        }
    });
    $(".btn__scroll").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});
