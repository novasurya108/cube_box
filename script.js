document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.cube');
    const audio = document.querySelector('audio'); // Select the audio element
    const startTime = 0; // Start time in seconds
   // const endTime = ; // End time in seconds

    audio.currentTime = startTime; // Set the audio to start at the specified time


    audio.addEventListener('ended', function() {
        audio.currentTime = startTime; // Reset to start time when the audio ends
        audio.play(); // Play the audio again
    });

    cube.addEventListener('touchstart', function() {

        // Trigger the same transformations as hover
        cube.classList.add('active');
    });

    cube.addEventListener('touchend', function() {

        // Remove the transformations
        cube.classList.remove('active');
    });
});
