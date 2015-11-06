$(function () {
    $('.player').addClass('loaded');

    $('.range').on('change mousemove', function () {
        var val = $(this).val();
        var buf = ((100 - val) / 4) + parseInt(val);
        $(this).css(
            'background',
            'linear-gradient(to right, #cc181e 0%, #cc181e ' + val + '%, #777 ' + val + '%, #777 100%)'
        );
    });

    $('.player').on('tap focusin mouseover mousedown hover', function () {
        $(this).addClass('hover');
    });
    $('.player').on('tap focusout mouseout mouseup', function () {
        removeHoverClass();
    });

    function removeHoverClass() {
        $('.player').removeClass('hover');
    }

});






