// MADE BY GABHASTI GIRI SINHA
// CLASS IX C 
// ROLL 19 
// Admission NO : 16793
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    const muteButton = document.getElementById('mute-button');

    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });
});
