$(document).ready(function () {

    $(".movie").click(function () {
        $(this).siblings().removeClass(`active1`);
        $(this).siblings().children().removeClass(`active1`);
        $(this).toggleClass("active1");
        $(this).children().toggleClass("active1");
    });
});