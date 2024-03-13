const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const randomUseragent = require('random-useragent')


(async () => {
  const browser = await puppeteer.launch({ });
  await page.setUserAgent(randomUseragent.getRandom())
  const page = await browser.newPage();
  await page.goto('https://g1.globo.com/');
  
  



  const myList = await page.evaluate(() => {
    
    const listNotices = document.querySelectorAll(".feed-post-link");
    const arrayNotices = [...listNotices];
    const myList = arrayNotices.map((notice) => ({
      text: notice.textContent,
      href: notice.href
    }));



    return myList;
  })

  const MaisLidas = await page.evaluate(() => {
    
    const maislidas=document.querySelectorAll(".post-mais-lidas__title")
    const arrayNotices = [...listNotices];
    const myList = arrayNotices.map((notice) => (console.log(notice)));



    return MaisLidas;
  })

  MaisLidas()
  


  fs.writeFile('notices.json', JSON.stringify(myList, null, 2), err => {
    if(err) throw new Error('something went wrong')

    console.log('well done!')
  })

  await browser.close();
})();