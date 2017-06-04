import { WebProjectPage } from './app.po';

describe('web-project App', () => {
  let page: WebProjectPage;

  beforeEach(() => {
    page = new WebProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
