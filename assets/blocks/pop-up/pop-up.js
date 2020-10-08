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
    this.executeCallbackList('afterOpen');
  }

  closePopUp() {
    this.toggleOverflow();
    this.popUp.classList.add('display-none');
  }

  isOpen() {
    if (this.popUp.classList.contains('display-none')) return false;
    return true;
  }

  togglePopUp() {
    if (!this.isOpen()){
      this.openPopUp()
    } else {
      this.closePopUp()
    }
  }
  
  toggleOverflow() {
    this.bodyBlock.classList.toggle('overflow');
  }
  
  initEventHandlers(){
    this.buttonOpenPopUpAddNote.addEventListener('click', (e) => {
      // Останавливаем всплытия, чтобы клик по кнопке открытия pop-up не закрывал pop-up
      e.stopPropagation();
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
    });
    document.addEventListener('click', (e) => {
      if (this.isOpen()) {
        this.closePopUp();
      }
    });
    this.formAddNote.addEventListener('click', (e) => {
      // Останавливаем всплытия, чтобы клик по форме не закрывал pop-up
      e.stopPropagation();
    });
  }
}