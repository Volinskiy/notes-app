import './note-item.less';

document.addEventListener('DOMContentLoaded', () => {

  let buttonsClose = document.querySelectorAll('article.note-item button.jsButtonDeleteNote');
  
  buttonsClose.forEach((elem) => {
    elem.addEventListener('click', function(){
      this.closest('article.note-item').classList.add('display-none');
    })
  })

})