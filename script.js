let timer;
let currentExercise;

function openTimer(exerciseName, sets, reps) {
    currentExercise = exerciseName;
    let exerciseInfo = `Exercise: ${exerciseName}\nSets: ${sets}\nReps: ${reps}\nTime: `;
    let timePerSet = reps === 'Max' ? 'Hold as long as possible' : `${reps} seconds`;

    if (reps !== 'Max') {
        const exerciseDetails = `${exerciseInfo}${timePerSet}`;
        const userConfirmed = confirm(exerciseDetails);
        if (userConfirmed) {
            startTimer(reps);
        }
    } else {
        startTimer('Max');
    }
}

function startTimer(duration) {
    let timeRemaining = duration === 'Max' ? 60 : duration; // Max hold time of 60 seconds
    const display = document.createElement('div');
    display.className = 'timer-display';
    document.body.appendChild(display);

    timer = setInterval(() => {
        display.innerHTML = `Time Remaining: ${timeRemaining} seconds`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timer);
            alert(`${currentExercise} completed!`);
            display.remove();
        }
    }, 1000);
}

function goBack() {
    window.history.back();
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Close the sidebar if clicking outside of it
window.onclick = function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    if (!menuIcon.contains(event.target) && sidebar.classList.contains('open') && !sidebar.contains(event.target)) {
        sidebar.classList.remove('open');
    }
};
// Function to open the lightbox
function openLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");

    lightbox.style.display = "block"; // Show the lightbox
    lightboxImg.src = element.src; // Set the source of the lightbox image
    caption.innerHTML = element.alt; // Set the caption text
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
}
