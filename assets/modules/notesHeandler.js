
export default class NotesHeandler
{
  constructor(blockNotesSelector) {
    this.blockNotes = document.querySelector(blockNotesSelector);
  }

  addNoteItems(notesList) {
    let notesArray = !Array.isArray(notesList) ? [notesList] : notesList;
    let notes = [];

    notesArray.forEach((curNote) => {
      notes.push(this.createNoteNode(curNote));
    })
    this.blockNotes.append(...notes); 
  }

  addNote(note) {
    let noteNode = this.createNoteNode(note);

    this.blockNotes.append(noteNode);
  }

  createNoteNode(addNote) {
    let note = document.createElement('article');
    
    note.className = "note-item main__note-item";
    note.innerHTML = 
        `<button class="note-item__button-delete button--close button jsButtonDeleteNote"></button>
        <h2 class="note-item__header">${addNote.header}</h2>
        <time class="note-item__time" datetime="2020-11-20">${addNote.date}</time>
        <div class="note-item__description">
        <p class="note-item__text">${addNote.description}</p>
        </div>`;
    
    return note;
  }

}