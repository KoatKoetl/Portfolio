import ScrollReveal from 'scrollreveal';

class Animations {
  constructor() {
    this.aboutMeText = Array.from(document.querySelectorAll('.about-me__text-span'));
    this.socialMediaLinks = Array.from(document.querySelectorAll('.about-me__social-media-link'));
    this.homelandSection = document.querySelector('.homeland');
    this.skillsSection = document.querySelector('.skills');
  }

  textAppearWithDelay(span, delay) {
    setTimeout(() => {
      setTimeout(() => {
        span.classList.add('about-me__text-span--appear');
      }, delay);
    }, 1000);
  }

  linksAppearWithDelay(link, delay) {
    setTimeout(() => {
      setTimeout(() => {
        link.classList.add('about-me__social-media-link--appear');
      }, delay);
    }, 3500);
  }

  enable_Animations() {
    // Animate the text from about-me section
    this.aboutMeText.forEach((node, index) => {
      this.textAppearWithDelay(node, index * 500);
    });
    // Animate social media icon links to appear one after another
    this.socialMediaLinks.forEach((link, index) => {
      this.linksAppearWithDelay(link, index * 500);
    });
    // Animate the homeland section to appear on scroll
    ScrollReveal().reveal(this.homelandSection, { distance: '500px', origin: 'top', reset: true });
    // Animate the skills section to appear on scroll
    ScrollReveal().reveal(this.skillsSection, {
      distance: '500px',
      reset: true,
    });
  }
}

const animation = new Animations();

function enable_AllAnimations() {
  animation.enable_Animations();
}

export { animation, enable_AllAnimations };
