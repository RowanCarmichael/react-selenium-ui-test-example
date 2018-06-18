import AppPage from './AppPage';

describe('React Selenium UI Test Example', () => {
  let page;

  before(async () => {
    page = new AppPage();
    await page.loadPage();
  });

  after(async () => {
    page.quit();
  });

  describe('', () => {
    it('checking number of markers = 3', async () => {
      await page.assertMarkerCount(3);
    });

    it('clicking first marker', async () => {
      await page.clickMarker(0);
    });

    it('waiting for details loading', async () => {
      await page.detailsLoaded();
    });

    it('edit comment', async () => {
      await page.editDetailsComment('This is a comment');
    });

    it('deactivate', async () => {
      await page.deactivateDetails();
    });

    it('waiting for map loading', async () => {
      await page.mapLoaded();
    });

    it('checking number of markers = 2', async () => {
      await page.assertMarkerCount(2);
    });

    it('clicking second marker', async () => {
      await page.clickMarker(0);
    });

    it('waiting for details loading', async () => {
      await page.detailsLoaded();
    });

    it('edit comment', async () => {
      await page.editDetailsComment('This is another comment');
    });

    it('deactivate', async () => {
      await page.deactivateDetails();
    });

    it('waiting for map loading', async () => {
      await page.mapLoaded();
    });

    it('checking number of markers = 1', async () => {
      await page.assertMarkerCount(1);
    });

    it('clicking last marker', async () => {
      await page.clickMarker(0);
    });

    it('waiting for details loading', async () => {
      await page.detailsLoaded();
    });

    it('edit comment', async () => {
      await page.editDetailsComment('This is the final comment');
    });

    it('deactivate', async () => {
      await page.deactivateDetails();
    });

    it('waiting for map loading', async () => {
      await page.mapLoaded();
    });

    it('checking no markers are present', async () => {
      await page.markersAreNotPresent();
    });

    it('reactivate all markers', async () => {
      await page.reactivateMarkers();
    });

    it('wait for page to load', async () => {
      await page.mapLoaded();
    });

    it('checking number of markers = 3', async () => {
      await page.assertMarkerCount(3);
    });
  });
});
