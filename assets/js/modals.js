// Load how to play modal on window load.

$(window).on('load', function () {
    $('#ltp-modal').modal('show');

    $(".level-btn").click(function () {
        $('#ltp-modal').modal('hide');
    })
});