import { PicStaticPage } from './app.po';

describe('pic-static App', function() {
  let page: PicStaticPage;

  beforeEach(() => {
    page = new PicStaticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
