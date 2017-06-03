import { DadosPage } from './app.po';

describe('dados App', () => {
  let page: DadosPage;

  beforeEach(() => {
    page = new DadosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
