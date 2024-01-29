import ScrollReveal from 'scrollreveal';

class Animations {
  constructor() {
    this.skillsSection = document.querySelector('.skills');
  }

  enable_Animations() {
    // Animate the skills section to appear on scroll
    ScrollReveal().reveal(this.skillsSection, {
      distance: '150px',
      reset: true,
    });
  }
}

const animation = new Animations();

function enable_AllAnimations() {
  animation.enable_Animations();
}

export { animation, enable_AllAnimations };
