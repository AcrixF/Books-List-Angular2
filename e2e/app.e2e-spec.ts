import { InterpolationSyntaxPage } from './app.po';

describe('interpolation-syntax App', () => {
  let page: InterpolationSyntaxPage;

  beforeEach(() => {
    page = new InterpolationSyntaxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
