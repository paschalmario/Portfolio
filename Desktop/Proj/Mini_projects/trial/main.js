// Sample data for notes
const notes = {
    1: "Detailed content of Note 1. Here are the full details of this note.",
    2: "Detailed content of Note 2. Here are the full details of this note.",
    3: "Detailed content of Note 3. Here are the full details of this note."
};

// Function to show note details
function showNoteDetails(noteId) {
    const noteDetailsModal = document.getElementById('noteDetailsModal');
    const noteDetails = document.getElementById('noteDetails');
    noteDetails.innerText = notes[noteId];
    noteDetailsModal.style.display = 'block';
}

// Close the modal
document.querySelector('.close').onclick = function() {
    document.getElementById('noteDetailsModal').style.display = 'none';
};

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    const noteDetailsModal = document.getElementById('noteDetailsModal');
    if (event.target === noteDetailsModal) {
        noteDetailsModal.style.display = 'none';
    }
};

// Add click event listeners to note summaries
document.querySelectorAll('.note-summary').forEach(noteSummary => {
    noteSummary.addEventListener('click', function() {
        const noteId = this.getAttribute('data-note-id');
        showNoteDetails(noteId);
    });
});
