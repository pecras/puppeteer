const puppeteer=require("puppeteer")
const randomUseragent = require('random-useragent')
const fs = require('fs-extra');
const RocketLawyer= "https://www.rocketlawyer.com/br/pt/interview/25ac10fd-6bc0-42d9-af42-b046e3ee7f3b;page=1;document=dbf2b804-0c83-4151-a562-c9da8c2c5a1a"

const Zap=async()=>{
    const browser = await puppeteer.launch({
        headless:false
       });
 
    const page = await browser.newPage();
    await page.setUserAgent(randomUseragent.getRandom())
    await page.goto(RocketLawyer)
 
    
    //await page.waitForSelector("div#boiler.boiler")
//const Contrato=await page.$$eval("div#boiler.boiler",(e)=>e.map((ele)=> ele.textContent))


console.log(Contrato)
 


/*fs.writeFile('AluguelTatuapeApartamento.json', JSON.stringify(novoObjetoImoveis, null,2), err => {
   if(err) throw new Error('something went wrong')

    console.log('well done!')
 })*/

  //await browser.close() 

}

Zap()
