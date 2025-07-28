// features/step_definitions/steps.js

const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('I open the page {string}', async function (url) {
  browser = await chromium.launch({ headless: false, slowMo: 100 });
  page = await browser.newPage();
  await page.goto(url);
});

Then('the title should be {string}', async function (expectedTitle) {
  const actualTitle = await page.title();
  if (actualTitle !== expectedTitle) {
    throw new Error(`Expected "${expectedTitle}", but got "${actualTitle}"`);
  }
  await browser.close();
});
