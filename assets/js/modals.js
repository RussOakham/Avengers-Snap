// Load how to play modal on window load and close modal on difficulty selection.

$(window).on('load', function () {
    $('#ltp-modal').modal('show');

    $(".level-btn").click(function () {
        $('#ltp-modal').modal('hide');
    })

    $(".level-btn").click(function () {
        $('#congrats-modal').modal('hide');
    })
});


