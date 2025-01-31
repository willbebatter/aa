document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalFrame = document.getElementById('modal-frame');
    const closeModal = document.querySelector('.close-modal');

    // Close modal on button click
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalFrame.src = '';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalFrame.src = '';
        }
    });
});
