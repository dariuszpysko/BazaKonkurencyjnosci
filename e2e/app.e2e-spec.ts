import { BazaKonkurencyjnosciPage } from './app.po';

describe('baza-konkurencyjnosci App', () => {
  let page: BazaKonkurencyjnosciPage;

  beforeEach(() => {
    page = new BazaKonkurencyjnosciPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
