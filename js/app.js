"use strict";

$(function () {

    var filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        var cat = $(this).data('filter');

        if (cat == 'другое') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {

                var articleCat = $(this).data('cat');

                if (articleCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});
