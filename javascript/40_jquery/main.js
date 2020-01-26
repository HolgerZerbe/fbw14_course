$(document).ready(function () {
    console.log(`40_jquery`);
    console.log(jQuery.fn.jquery);

    $(`#btn1`).on({
        mouseenter: function () {
            $(this).text(`Welcome! Stay here forever!`);
            $(this).css(`background`, `goldenrod`)
                .css(`color`, `darkred`);
            $(this).attr(`type`, `reset`);
        },
        mouseleave: function () {
            $(this).text(`Click me, before I am gone!`);
            $(this).css({
                "background": "darkred",
                "color": "goldenrod"
            })
            .fadeOut(30000);
        },
        click: function() {
            $(this).css({
                "opacity": 1,
                "display":"block"
            });
        }
    })

});