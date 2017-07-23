import { browser, by, element } from 'protractor';

export class SlkdjflkPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
