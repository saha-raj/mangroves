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

    // Explicitly handle expand button visibility
    const expandButton = d3.select('.expand-collapse-toggle');
    if (expandButton.node()) {
        expandButton
            .style('opacity', '0.8')
            .style('display', null)  // Remove any display: none
            .style('visibility', 'visible');  // Ensure visibility
            
        expandButton.select('.toggle-icon')
            .attr('href', 'assets/general/expand.svg');
    }
}

// Remove all scroll-based expansion triggers and arrow navigation

// Separate escape key handler
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sequenceState.isExpanded) {
        collapseSequence();
        
        // Double-check button visibility after collapse
        const expandButton = d3.select('.expand-collapse-toggle');
        if (expandButton.node()) {
            expandButton
                .style('opacity', '0.8')
                .style('display', null)
                .style('visibility', 'visible');
        }
    }
});