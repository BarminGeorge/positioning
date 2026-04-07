const openModalBtn = document.querySelector('#openModalBtn');
const closeModalBtn = document.querySelector('#closeModalBtn');
const modalOverlay = document.querySelector('#modalOverlay');

openModalBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});