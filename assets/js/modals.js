// Load how to play modal on window load and close modal on difficulty selection.

$(window).on('load', function () {
    $('#ltp-modal').modal('show');
});

function congratsModal() {
    app.moveScore.innerHTML = app.moves;
    if (app.minute == 0) {
        app.timeScore.innerHTML = app.second+" seconds";
    }
    else {
        app.timeScore.innerHTML = app.minute+" minutes "+app.second+" seconds";
    };
    
    $('#congrats-modal').modal('show');
}

function audioModal() {
    $('#audio-modal').modal('show');
}

function closeModals() {
    $('#ltp-modal').modal('hide');
    $('#congrats-modal').modal('hide');
    $('#audio-modal').modal('hide');
}
