import './pop-up.less';
import NotesHeandler from '../../modules/notesHeandler';

document.addEventListener('DOMContentLoaded', () => {
    
    let buttonOpenPopUpAddNote = document.querySelectorAll('.jsButtonOpenPopUpAddNote');
    
    for (let btn of buttonOpenPopUpAddNote){
      btn.addEventListener('click', () => {
        openPopUp();
      })
    }

    let popUpAddNote = document.querySelector('.jsPopUpAddNote');
    
    popUpAddNote.addEventListener('click', (e) => {
      if (e.target.classList.contains('jsButtonClosePopUp') || e.target.classList.contains('jsPopUpAddNote')){
        closePopUp();
      }
    })
    
    let formAddNote = document.forms.formAddNote;

    formAddNote.addEventListener('submit', (e) => {
      e.preventDefault();
      closePopUp();
      let note = {
                  "header": formAddNote.elements.noteHeader.value,
                  "date": new Date(),
                  "description":  formAddNote.elements.noteDescription.value
                 }
      
      let notesHeandler = new NotesHeandler('.jsNotes');
      
      notesHeandler.addNote(note);
    })

    function openPopUp() {
      toggleOverflow()
      let popUpWindow = document.querySelector('.pop-up');
      popUpWindow.classList.remove('display-none');
    }

    function closePopUp() {
      toggleOverflow()
      let popUpWindow = document.querySelector('.pop-up');
      popUpWindow.classList.add('display-none');
    }

    function toggleOverflow() {
      let bodyBlock = document.querySelector('body');
      bodyBlock.classList.toggle('overflow');
    }


})


