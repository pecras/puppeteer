const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://g1.globo.com/');
  await page.setViewport({ width: 1280, height: 800 })

  const divCount = await page.$$eval('div', divs => divs.length);
  console.log(divCount)
  

  
  




  
  




  //await browser.close();
})();