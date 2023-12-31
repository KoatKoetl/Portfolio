class Button {
  constructor() {
    this.infoButton = document.querySelector('.homeland__info-button');
    this.infoMessage = document.querySelector('.homeland__info-message');
    this.timeoutHideMessage = undefined;
  }

  // Add logic for info button from homeland section
  onClick_infoButton() {
    this.infoMessage.style.visibility = 'hidden';
    this.infoMessage.style.opacity = '0';
    this.infoMessage.style.transition = 'opacity 300ms ease-in-out, visibility 300ms';
    this.infoButton.addEventListener('click', () => {
      this.infoMessage.style.visibility === 'hidden'
        ? ((this.infoMessage.style.visibility = 'visible'), (this.infoMessage.style.opacity = '1'))
        : ((this.infoMessage.style.visibility = 'hidden'), (this.infoMessage.style.opacity = '0'));
      if (this.infoMessage.style.visibility === 'visible') {
        this.timeoutHideMessage = setTimeout(() => {
          this.infoMessage.style.visibility = 'hidden';
          this.infoMessage.style.opacity = '0';
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
