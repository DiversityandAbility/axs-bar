APP.common.zoom = (function($) {
    var zoom = {};

    zoom.zoom = function (scale) {
        if (scale === undefined) {
            scale = Number(localStorage.getItem("zoom.scale")) || 1;
        }
        $('body').css('MozTransform', 'scale(' + scale + ')');
        $('body').css('zoom', ' ' + scale * 100 + '%');
        localStorage.setItem("zoom.scale", scale);
    };

    zoom.zoom_in = function () {
        var scale = Number(localStorage.getItem("zoom.scale")) || 1;
        scale += 0.05;
        zoom.zoom(scale);
    };

    zoom.zoom_out = function () {
        var scale = Number(localStorage.getItem("zoom.scale")) || 1;
        scale -= 0.05;
        zoom.zoom(scale);
    };

    zoom.init = function() {
        $(".accessibility .size").append($("<a href='javascript:void(0);' data-size='smaller' id='size_smaller'><i class='fa fa-font fa-lg fa-fw'></i><i class='fa fa-minus'></i></a>"));
        $(".accessibility .size").append($("<a href='javascript:void(0);' data-size='larger' id='size_larger'><i class='fa fa-font fa-lg fa-fw'></i><i class='fa fa-plus'></i></a>"));

        $('#size_larger').on('click', function () {
            zoom.zoom_in();
            return false;
        });
        $('#size_smaller').on('click', function () {
            zoom.zoom_out();
            return false;
        });
        zoom.zoom(Number(localStorage.getItem("zoom.scale")) || 1);
    };

    return zoom;
})(jQuery);
