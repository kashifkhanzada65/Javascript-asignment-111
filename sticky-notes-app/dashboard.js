const addBtn = document.querySelector('.addBtn');
const notesContainer = document.querySelector('.notes');
const getCurrentUser = JSON.parse(localStorage.getItem('loginUser'))


showNotes();

addBtn.addEventListener('click', () => {
    createNote();
})

function createNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <textarea placeholder="write your note...">${text}</textarea>
    <button class="delete">×</button>
    `;
    notesContainer.appendChild(note);

    const textarea = note.querySelector('textarea');
    const deleteBtn = note.querySelector('.delete');

    textarea.addEventListener('input', saveNotes);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        saveNotes();
    });

    saveNotes();

}

function saveNotes() {
    const notes = [];

    document.querySelectorAll('.note textarea').forEach((note) => {
        notes.push({
            email: getCurrentUser.email,
            text: note.value
        });
    })

    localStorage.setItem('notes', JSON.stringify(notes));

}

function showNotes() {

    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach((note) => {
        if (note.email === getCurrentUser.email) {
            createNote(note.text);
        }
    })
}

const allDeleteNotes = () => {
    let getNotes = JSON.parse(localStorage.getItem('notes'));
    getNotes = [];
    getNotes.push(getCurrentUser.email)
    localStorage.setItem('notes', JSON.stringify(getNotes));

    notesContainer.innerHTML = '';

}

