$(document).ready(function () {
    $("button").click(function () {
        $("#images").fadeIn();
        $(".nav-link").click(function () {
            $("#images").fadeOut()
        });
    });


});