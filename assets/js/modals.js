// Load how to play modal on window load and close modal on difficulty selection.

$(window).on('load', function () {
    $('#ltp-modal').modal('show');
});

function congratsModal() {
    $('#congrats-modal').modal('show');
}

function closeModals() {
    $('#ltp-modal').modal('hide');
    $('#congrats-modal').modal('hide');
}

