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

  describe('Deactivating and reactivating markers', () => {
    it('Checking number of markers = 3', async () => {
      await page.assertMarkerCount(3);
    });

    it('Clicking first marker', async () => {
      await page.clickMarker(0);
    });

    it('Waiting for details loading', async () => {
      await page.detailsLoaded();
    });

    it('Edit comment', async () => {
      await page.editDetailsComment('This is a comment');
    });

    it('Deactivate', async () => {
      await page.deactivateDetails();
    });

    it('Waiting for map loading', async () => {
      await page.mapLoaded();
    });

    it('Checking number of markers = 2', async () => {
      await page.assertMarkerCount(2);
    });

    it('Clicking second marker', async () => {
      await page.clickMarker(0);
    });

    it('Waiting for details loading', async () => {
      await page.detailsLoaded();
    });

    it('Edit comment', async () => {
      await page.editDetailsComment('This is another comment');
    });

    it('Deactivate', async () => {
      await page.deactivateDetails();
    });

    it('Waiting for map loading', async () => {
      await page.mapLoaded();
    });

    it('Checking number of markers = 1', async () => {
      await page.assertMarkerCount(1);
    });

    it('Clicking last marker', async () => {
      await page.clickMarker(0);
    });

    it('Waiting for details loading', async () => {
      await page.detailsLoaded();
    });

    it('Edit comment', async () => {
      await page.editDetailsComment('This is the final comment');
    });

    it('Deactivate', async () => {
      await page.deactivateDetails();
    });

    it('Waiting for map loading', async () => {
      await page.mapLoaded();
    });

    it('Checking no markers are present', async () => {
      await page.markersAreNotPresent();
    });

    it('reactivate all markers', async () => {
      await page.reactivateMarkers();
    });

    it('Wait for page to load', async () => {
      await page.mapLoaded();
    });

    it('Checking number of markers = 3', async () => {
      await page.assertMarkerCount(3);
    });
  });
});
