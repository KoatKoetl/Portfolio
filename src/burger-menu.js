const hamburgerMenuButton = document.querySelector('.header__hamburger-menu');
const hamburgerMenuCheckbox = document.querySelector('.header__hamburger-menu-checkbox');
const hamburgerMenuLinks = Array.from(document.querySelectorAll('.header__hamburger-menu-sidebar .header__nav-link'));
const hamburgerMenuSidebar = document.querySelector('.header__hamburger-menu-sidebar');

// open hamburger menu when clicked
function actionHamburgerMenu() {
  hamburgerMenuButton.addEventListener('click', () => {
    if (hamburgerMenuCheckbox.checked === false) {
      hamburgerMenuCheckbox.checked = true;
      hamburgerMenuSidebar.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      hamburgerMenuCheckbox.checked = false;
      hamburgerMenuSidebar.style.right = '100%';
      document.body.style.overflow = 'scroll';
    }
  });
}

// Close menu when clicked on link
function openHamburgerMenuLink() {
  hamburgerMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburgerMenuCheckbox.checked = false;
      hamburgerMenuSidebar.style.right = '100%';
      document.body.style.overflow = 'scroll';
    });
  });
}

// Hide menu if screen width is resized
function hideHamburgerMenuOnResize() {
  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
      hamburgerMenuCheckbox.checked = false;
      hamburgerMenuSidebar.style.right = '100%';
      document.body.style.overflow = 'scroll';
    }
  });
}

function onScreenActivate() {
  actionHamburgerMenu();
  openHamburgerMenuLink();
  hideHamburgerMenuOnResize();
}

export { onScreenActivate };
