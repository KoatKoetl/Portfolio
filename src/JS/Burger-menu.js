class BurgerMenu {
  constructor() {
    this.hamburgerMenuButton = document.querySelector('.header__hamburger-menu');
    this.hamburgerMenuCheckbox = document.querySelector('.header__hamburger-menu-checkbox');
    this.hamburgerMenuLinks = Array.from(document.querySelectorAll('.header__hamburger-menu-sidebar .header__nav-link'));
    this.hamburgerMenuSidebar = document.querySelector('.header__hamburger-menu-sidebar');
  }

  // open hamburger menu when clicked
  open_HamburgerMenu() {
    this.hamburgerMenuButton.addEventListener('click', () => {
      if (this.hamburgerMenuCheckbox.checked === false) {
        this.hamburgerMenuCheckbox.checked = true;
        this.hamburgerMenuSidebar.style.right = '0';
        document.body.style.overflow = 'hidden';
      } else {
        this.hamburgerMenuCheckbox.checked = false;
        this.hamburgerMenuSidebar.style.right = '100%';
        document.body.style.overflow = 'scroll';
      }
    });
  }

  // Close menu when clicked on link
  open_HamburgerMenuLink() {
    this.hamburgerMenuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.hamburgerMenuCheckbox.checked = false;
        this.hamburgerMenuSidebar.style.right = '100%';
        document.body.style.overflow = 'scroll';
      });
    });
  }

  // Hide menu if screen width is resized
  hide_HamburgerMenuOnResize() {
    window.addEventListener('resize', () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 850) {
        this.hamburgerMenuCheckbox.checked = false;
        this.hamburgerMenuSidebar.style.right = '100%';
        document.body.style.overflow = 'scroll';
      }
    });
  }
}

const headerBurgerMenu = new BurgerMenu();

export default function enable_HeaderBurgerMenu() {
  headerBurgerMenu.open_HamburgerMenu();
  headerBurgerMenu.open_HamburgerMenuLink();
  headerBurgerMenu.hide_HamburgerMenuOnResize();
}
