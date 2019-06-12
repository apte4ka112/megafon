$(document).ready(function () {
    $('.accordion__head').on('click', function(e) {
        var parent = $(this).parent();
        $('.accordion__content', parent).slideToggle(parent.is('.accordion__item-collapsed'));
        parent.toggleClass('accordion__item-collapsed');
    });
    //tabs
    $(".tabs .tabs__item").on('click', function (event) {
        event.preventDefault();
        $(".tabs .tabs__item").removeClass("tabs__item_active");
        $(this).addClass("tabs__item_active");
        var tab = $(this).attr("href");
        console.log(tab)
        $(".tabs  .tabs__content").not(tab).css("display", "none");
        $(tab).show();
        return false;
    });
});
