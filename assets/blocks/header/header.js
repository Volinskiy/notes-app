import './header.less';

import MainMenu from '../main-nav/main-nav';
import PopUpAddNote from '../pop-up/pop-up';


document.addEventListener('DOMContentLoaded', () => {
  let mainMenu = new MainMenu();
  let popUpAddNote = new PopUpAddNote();
  
  popUpAddNote.addCallback('afterOpen', () => {
    mainMenu.closeMenu();
  })
})
