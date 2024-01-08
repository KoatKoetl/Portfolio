class Button {
  constructor() {
    // this.infoButton = document.querySelector('.homeland__info-button');
    // this.infoMessage = document.querySelector('.homeland__info-message');
    this.timeoutHideMessage = undefined;
  }

  // Add logic for info button from homeland section
  onClick_infoButton() {
    const infoButton = document.querySelector('.homeland__info-button');
    const infoMessage = document.querySelector('.homeland__info-message');
    infoMessage.style.visibility = 'hidden';
    infoMessage.style.opacity = '0';
    infoButton.addEventListener('click', () => {
      infoMessage.style.transition = 'opacity 300ms ease-in-out, visibility 300ms';
      infoMessage.style.visibility === 'hidden'
        ? ((infoMessage.style.visibility = 'visible'), (infoMessage.style.opacity = '1'))
        : ((infoMessage.style.visibility = 'hidden'), (infoMessage.style.opacity = '0'));
      if (infoMessage.style.visibility === 'visible') {
        this.timeoutHideMessage = setTimeout(() => {
          infoMessage.style.visibility = 'hidden';
          infoMessage.style.opacity = '0';
        }, 10000);
      } else {
        clearTimeout(this.timeoutHideMessage);
      }
    });
  }
}

const infoButton = new Button();

export default function enable_InfoButton() {
  infoButton.onClick_infoButton();
}
