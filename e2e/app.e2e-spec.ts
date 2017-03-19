import { QuoteAppPage } from './app.po';

describe('quote-app App', function() {
  let page: QuoteAppPage;

  beforeEach(() => {
    page = new QuoteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
