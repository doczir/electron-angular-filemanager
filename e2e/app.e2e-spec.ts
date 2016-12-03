import { ElectronNgPage } from './app.po';

describe('electron-ng App', function() {
  let page: ElectronNgPage;

  beforeEach(() => {
    page = new ElectronNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
