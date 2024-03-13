const puppeteer=require("puppeteer")
const randomUseragent = require('random-useragent')

const apartamaentosZapImoveis="https://www.zapimoveis.com.br/imovel/aluguel-apartamento-2-quartos-com-piscina-tatuape-zona-leste-sao-paulo-sp-80m2-id-2666470295/"

const zap=async()=>{
    const browser = await puppeteer.launch({
     headless:false
    });


    console.log(randomUseragent.getRandom())
    const page = await browser.newPage();
    await page.setUserAgent(randomUseragent.getRandom())
    await page.goto(apartamaentosZapImoveis)
    await page.waitForSelector("h1.main__container__info--title.new-l-text.new-l-u-color-neutral-darker.new-l-text--variant-heading-regular.new-l-text--weight-bold");
    const name = await page.$eval("h1.main__container__info--title.new-l-text.new-l-u-color-neutral-darker.new-l-text--variant-heading-regular.new-l-text--weight-bold", (el)=> el.textContent)
   const address= await page .$eval("span.link",(el)=>el.textContent)
   const metros= await page.$eval("li.feature__item.text-regular.js-areas",(el)=>el.textContent)
   const vagas= await page.$eval("li.feature__item.text-regular.js-parking-spaces",el =>el.textContent)
    const banheiros=await page.$eval("li.feature__item.text-regular.js-bathrooms", el =>el.textContent)
    const andar =await page.$eval("li.feature__item.text-regular.js-floor", el=>el.textContent)
   const Aluguel= await page.$eval("span.price__business--main", (el) => el.nextSibling.textContent)
    


const dados={
    name:name,
    address:address,
    metros:metros,
    aluguel:Aluguel,
    vagas:vagas,
    banheiros:banheiros,
    andar:andar}

    console.log(dados)
await browser.close()  
detalhesdoImovel.push((prev)=>{[prev,...dados]})
return{detalhesdoImovel}
}

const zapIMoveis="https://www.zapimoveis.com.br"

const ZapImo=async()=>{
    const browser = await puppeteer.launch({
        headless:false
       });
   
   
       console.log(randomUseragent.getRandom())
       const page = await browser.newPage();
       await page.setUserAgent(randomUseragent.getRandom())
       page.setDefaultTimeout(6000);
       await page.goto(zapIMoveis) 
       
       await page.waitForSelector("button.l-button.l-tabs__nav-item.l-tabs__nav-item--context-secondary")
      const selectSX= await page.$x("/html/body/div[1]/main/section[1]/section/div/main/div/div[2]/section/form/div/div/button[2]")
      await selectSX[0].click()
       await page.type("input","São Paulo -SP")
       await page.waitForSelector("#l-checkbox-4")
       await page.click("#l-checkbox-4")
       const multiSelectInput= await page.$x("/html/body/div[1]/main/section[1]/section/div/main/div/div[2]/section/form/section/section/div/div[2]/div/button/div/div[1]")
        await multiSelectInput[0].click()
        await page.waitForSelector("#l-checkbox-27")
        await page.click("#l-checkbox-27")
        await multiSelectInput[0].click()
        const buscar=await page.$x("/html/body/div[1]/main/section[1]/section/div/main/div/div[2]/section/form/section/div[2]/button")
        await buscar[0].click()
       //const check= await page.waitForSelector("#l-checkbox-137")
       //await page.click(check)
      //await page.click("button.l-button.l-button--fluid.l-button--context-secondary.l-button--size-large.l-button--icon-left.home-filter__stretch-button")
    }

ZapImo()