$(function () {
    
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');

        if (cat == 'другое') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {

                let articleCat = $(this).data('cat');

                if (articleCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }

        
    });

});