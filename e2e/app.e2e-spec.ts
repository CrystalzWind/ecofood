import { SlkdjflkPage } from './app.po';

describe('slkdjflk App', () => {
  let page: SlkdjflkPage;

  beforeEach(() => {
    page = new SlkdjflkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
