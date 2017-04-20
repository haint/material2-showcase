import { EasyStatsAppPage } from './app.po';

describe('easy-stats-app App', () => {
  let page: EasyStatsAppPage;

  beforeEach(() => {
    page = new EasyStatsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
