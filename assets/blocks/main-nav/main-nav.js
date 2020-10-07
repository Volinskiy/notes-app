import './main-nav.less';

export default class MainMenu {
  constructor(){
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
    this.buttonBurger.addEventListener('click', () => {
      this.toggleMenu();
    })
  }
}