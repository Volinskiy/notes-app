import './main.less';
import NotesHeandler from '../../modules/notesHeandler';



document.addEventListener('DOMContentLoaded', () => {
  let buttonLoadMore = document.querySelector('.jsButtonLoadMore');
  let notesHeandler = new NotesHeandler('.jsNotes');

  buttonLoadMore.addEventListener('click', () => {    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/notes.json');
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        notesHeandler.addNoteItems(JSON.parse(xhr.response));
      }
    };

    xhr.onerror = function() {
      alert("Запрос не удался");
    };
  })

  let blockNotes = document.querySelector('.jsNotes');
  
  blockNotes.addEventListener('click', (e) => {
    let target = e.target;
    if (!target.classList.contains('jsButtonDeleteNote')) return;
    target.closest('article.note-item').classList.add('display-none');
  })

})



