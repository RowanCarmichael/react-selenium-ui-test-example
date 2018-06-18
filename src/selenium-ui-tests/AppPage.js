import { By } from 'selenium-webdriver';
import { assert } from 'chai';
import Page from './Page';

class AppPage extends Page {
  constructor() {
    super();
    this.page = new Page();
    this.url = 'http://localhost:3000';
    this.mapLoadingBar = By.id('mapLoadingBar');
    this.marker = By.className('leaflet-marker-icon');
    this.detailsInput = By.id('detailsInput');
    this.detailsDeactivateButton = By.id('detailsDeactivateButton');
    this.reactivateButton = By.id('reactivateButton');
    this.detailsLoadingBar = By.id('detailsLoadingBar');
  }

  loadPage = async () => {
    const loadedPage = await this.page.load(this.url);
    await this.mapLoaded();
    return loadedPage;
  }

  assertMarkerCount = async (count) => {
    await this.page.findElements(this.marker).then((elements) => {
      assert.equal(elements.length, count);
    });
  }

  clickMarker = async (index) => {
    const marker = await this.page.findElements(this.marker).then(elements => elements[index]);
    await this.page.click(marker);
  }

  detailsLoaded = async () => {
    await this.page.elementIsNotPresent(this.detailsLoadingBar);
    await this.page.sleep();
  }

  mapLoaded = async () => {
    await this.page.elementIsNotPresent(this.mapLoadingBar);
    await this.page.sleep();
  }

  markersAreNotPresent = async () => {
    await this.page.elementIsNotPresent(this.marker);
  }

  editDetailsComment = async (comment) => {
    await this.page.inputText(await this.page.findElement(this.detailsInput), comment);
  }

  deactivateDetails = async () => {
    await this.page.click(await this.page.findElement(this.detailsDeactivateButton));
  }

  reactivateMarkers = async () => {
    await this.page.click(await this.page.findElement(this.reactivateButton));
  }
}

module.exports = AppPage;
