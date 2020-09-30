import './pop-up.less';

document.addEventListener('DOMContentLoaded', () => {
    
    let buttonOpenPopUpAddNote = document.querySelectorAll('.jsButtonOpenPopUpAddNote');
    
    for (let btn of buttonOpenPopUpAddNote){
      btn.addEventListener('click', () => {
        openPopUp();
      })
    }

    let buttonClosePopUp = document.querySelector('.jsButtonClosePopUp');
    
    buttonClosePopUp.addEventListener('click', () => {
      closePopUp();
    })
    
    let formAddNote = document.querySelector('.jsFormAddNote');

    formAddNote.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('hy');
      closePopUp();
    })


    function toggleOverflow() {
      let bodyBlock = document.querySelector('body');
      bodyBlock.classList.toggle('overflow');
    }

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

    // buttonAddNew.addEventListener('click', () => {
    //   openPopUp();
    // })


})


