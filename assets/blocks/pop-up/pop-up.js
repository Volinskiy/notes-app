import './pop-up.less';
import NotesHeandler from '../../modules/notesHeandler';

export default class PopUpAddNote extends NotesHeandler {
  constructor(){
    super('.jsNotes');
    this.buttonOpenPopUpAddNote = document.querySelector('.jsButtonOpenPopUpAddNote');
    this.popUp = document.querySelector('.jsPopUpAddNote');
    this.formAddNote = document.forms.formAddNote;
    this.buttonClosePopUp = this.formAddNote.querySelector('.jsButtonClosePopUp');
    this.bodyBlock = document.querySelector('body');
    this.initEventHandlers();
  }

  openPopUp() {
    this.toggleOverflow();
    this.popUp.classList.remove('display-none');
  }

  closePopUp() {
    this.toggleOverflow();
    this.popUp.classList.add('display-none');
  }

  togglePopUp() {
    if (this.popUp.classList.contains('display-none')){
      this.openPopUp()
    } else {
      this.closePopUp()
    }
  }
  
  toggleOverflow() {
    this.bodyBlock.classList.toggle('overflow');
  }
  
  initEventHandlers(){
    this.buttonOpenPopUpAddNote.addEventListener('click', () => {
      this.togglePopUp();
    });
    this.buttonClosePopUp.addEventListener('click', () => {
      this.closePopUp();
    });
    this.formAddNote.addEventListener('submit', (e) => {
      e.preventDefault();
      this.closePopUp();
      let note = {
                  "header": formAddNote.elements.noteHeader.value,
                  "date": new Date(),
                  "description":  formAddNote.elements.noteDescription.value
                 }
      
      this.addNote(note);
    })
  }
}


