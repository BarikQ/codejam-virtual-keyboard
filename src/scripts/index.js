const RU_KEYBOARD = {};
const EN_KEYBOARD = {};
const RU_LANG = 'ru';
const EN_LANG = 'en';

class App {
  constructor() {
    this.currentLanduage = EN_LANG
  }

  start() {
    console.log('start');
    this.draw();
    // window.addEventListener('keydown', this.pressKey);
    // window.addEventListener('keyup', this.removeListener);
  }

  draw() {
    console.log('draw');
  }

  pressKey(event) {
    // window.addEventListener('keydown', this.pressKey);
    // console.log(event.key, event.code);
  }

  removeListener(event) {
    // console.log(event.key);
  }

  changeLanguage() {

  }
}

const app = new App();
app.start();