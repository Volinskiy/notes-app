import './main-nav.less';
import CallbackTools from '../../modules/callbackTools.js';

export default class MainMenu extends CallbackTools{
  constructor(){
    super();
    this.mainMenuContainer = document.querySelector('.jsMainMenu');
    this.buttonBurger = this.mainMenuContainer.querySelector('.jsButtonBurger');
    this.menuList = this.mainMenuContainer.querySelector('.jsMainMenuList');
    this.initEventHandlers();
  }

  openMenu(){
    this.menuList.classList.remove('display-none');
    this.buttonBurger.classList.add('main-nav__burger-button--active');
    this.executeCallbackList('afterOpen');
  }

  closeMenu(){
    this.menuList.classList.add('display-none');
    this.buttonBurger.classList.remove('main-nav__burger-button--active');
  }

  toggleMenu(){
    if (this.menuList.classList.contains('display-none')){
      this.openMenu()
    } else {
      this.closeMenu()
    }
  }

  initEventHandlers(){
    this.buttonBurger.addEventListener('click', (e) => {
      // Останавливаем всплытие, чтобы клик по кнопке открытия меню не закрывал меню
      e.stopPropagation();
      this.toggleMenu();
    });
    document.addEventListener('click', (e) => {
      this.closeMenu();
    });
    this.menuList.addEventListener('click', (e) => {
      // Останавливаем всплытие, чтобы клик по меню не закрывал меню
      e.stopPropagation();
    });
  }
}