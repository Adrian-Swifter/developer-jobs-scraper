const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://poslovi.infostud.com/oglasi-za-posao/beograd?category%5B0%5D=5&dist=50');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();