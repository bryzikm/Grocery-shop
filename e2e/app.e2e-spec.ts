import { GroceryStorePage } from './app.po';

describe('GroceryStore App', function() {
  let page: GroceryStorePage;

  beforeEach(() => {
    page = new GroceryStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
