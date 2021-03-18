// Load how to play modal on window load and close modal on difficulty selection.
$(window).on('load', function () {
    $('#ltp-modal').modal('show');
});

// Function displays the congratulations modal and updates innerHTML for moves and time taken.
function congratsModal() {
    app.moveScore.innerHTML = app.moves;
    if (app.minute == 0) {
        app.timeScore.innerHTML = (app.second - 1)+" seconds";
    }
    else {
        app.timeScore.innerHTML = app.minute+" minutes "+app.second+" seconds";
    }
    
    $('#congrats-modal').modal('show');
}

// Function displays the audio settings Modal
function audioModal() {
    $('#audio-modal').modal('show');
}


// Function clodes all active modals when called.
function closeModals() {
    $('#ltp-modal').modal('hide');
    $('#congrats-modal').modal('hide');
    $('#audio-modal').modal('hide');
}
