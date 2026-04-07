const openModalBtn = document.querySelector('#openModalBtn');
const closeModalBtn = document.querySelector('#closeModalBtn');
const modalOverlay = document.querySelector('#modalOverlay');
const progressFill = document.querySelector('#progressFill');
const progressBar = document.querySelector('.progress-bar');
const progressLightText = document.querySelector('.progress-bar__fill .progress-bar__text--light');

let progressAnimationId = null;

function syncProgressTextWidth() {
    progressLightText.style.width = `${progressBar.clientWidth}px`;
}

function animateProgressBar(duration) {
    const startTime = performance.now();

    syncProgressTextWidth();
    progressFill.style.width = '0%';

    if (progressAnimationId !== null) {
        cancelAnimationFrame(progressAnimationId);
    }

    function updateProgress(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        progressFill.style.width = `${progress * 100}%`;

        if (progress < 1) {
            progressAnimationId = requestAnimationFrame(updateProgress);
        } else {
            progressAnimationId = null;
        }
    }

    progressAnimationId = requestAnimationFrame(updateProgress);
}

openModalBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
    animateProgressBar(3000);
});

window.addEventListener('resize', syncProgressTextWidth);
syncProgressTextWidth();

closeModalBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});