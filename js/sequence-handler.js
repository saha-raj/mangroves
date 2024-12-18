// Make toggleExpand available globally
window.toggleExpand = function() {
    if (sequenceState.isExpanded) {
        collapseSequence();
    } else {
        expandSequence();
    }
};

const sequenceState = {
    isExpanded: false,
    sequenceBlock: document.querySelector('.sequence-block')
};

function expandSequence() {
    sequenceState.isExpanded = true;
    sequenceState.sequenceBlock.classList.add('is-fullscreen');
    document.body.style.overflow = 'hidden';
    window.setScrollHandlerActive(true);
}

function collapseSequence() {
    sequenceState.isExpanded = false;
    sequenceState.sequenceBlock.classList.remove('is-fullscreen');
    document.body.style.overflow = '';
    window.setScrollHandlerActive(false);
}

// Remove all scroll-based expansion triggers and arrow navigation

// Add keyboard event listener for Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sequenceState.isExpanded) {
        collapseSequence();
    }
});