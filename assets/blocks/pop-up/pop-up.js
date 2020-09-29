import './pop-up.less';

document.addEventListener('DOMContentLoaded', () => {
    
    let buttonAddNew = document.querySelectorAll('.jsButtonAddNew');
    
    for (let btn of buttonAddNew){
      btn.addEventListener('click', () => {
        openPopUp(toggleOverflow);
      })
    }

    let buttonClosePopUp = document.querySelector('.jsButtonClosePopUp');

    buttonClosePopUp.addEventListener('click', () => {
      closePopUp(toggleOverflow);
    })

    function toggleOverflow() {
      let bodyBlock = document.querySelector('body');
      bodyBlock.classList.toggle('overflow');
    }

    function openPopUp(makeBefore) {
      makeBefore();
      let popUpWindow = document.querySelector('.pop-up');
      popUpWindow.classList.remove('display-none');
    }

    function closePopUp(makeBefore){
      makeBefore();
      let popUpWindow = document.querySelector('.pop-up');
      popUpWindow.classList.add('display-none');
    }

    // buttonAddNew.addEventListener('click', () => {
    //   openPopUp(toggleOverflow);
    // })


})


