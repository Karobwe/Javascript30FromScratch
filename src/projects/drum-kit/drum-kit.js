/*
 * Replace the background-color of a button when it's pressed
 * and play a sound according .instrument element content.
 */
document.addEventListener("keypress", function (event) {
    var key = event.key;
    var button = document.querySelector("#letter-"+key);
    try {
        button.classList.replace("btn-outline-warning", "btn-warning");
    } catch(TypeError) {
        // Do nothing
    }

    try {
        var audioTitle = button.lastElementChild.textContent.toLowerCase();
        var audioFile = document.querySelector("#audio-"+audioTitle);
        audioFile.load(); // Reload file if already playing
        audioFile.play();
    } catch (e) {
        // catch TypeError and DOMException
        // Do nothing
    }
})

/*
 * Remove the class for pressed button when they aren't pressed
 */
document.addEventListener("keyup", function (event) {
    var key = event.key;
    try {
        var button = document.querySelector("#letter-"+key);
        button.classList.replace("btn-warning", "btn-outline-warning");
    } catch (TypeError) {
        // Do nothing
    }
})