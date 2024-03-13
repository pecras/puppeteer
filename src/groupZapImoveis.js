const puppeteer=require("puppeteer")
const randomUseragent = require('random-useragent')
const fs = require('fs-extra');
const zapimoveis= "https://www.zapimoveis.com.br/aluguel/apartamentos/sp+sao-paulo+zona-leste+tatuape/?__ab=seo-texts:new,exp-aa-test:B,deduplication:select,new-area-logada:variant,preco-metro-quadrado:logged,gallery-test:btn-bot&transacao=aluguel&onde=,S%C3%A3o%20Paulo,S%C3%A3o%20Paulo,Zona%20Leste,Tatuap%C3%A9,,,neighborhood,BR%3ESao%20Paulo%3ENULL%3ESao%20Paulo%3EZona%20Leste%3ETatuape,-23.555441,-46.55057,&tipos=apartamento_residencial&pagina=1&banheiros=2&quartos=2,3&vagas=2,1&precoTotalMaximo=2500"

const Zap=async()=>{
    const browser = await puppeteer.launch({
        headless:false
       });
       console.log(randomUseragent.getRandom())
    const page = await browser.newPage();
    await page.setUserAgent(randomUseragent.getRandom())
    await page.goto(zapimoveis)
const title=await page.$$eval("h2.l-text.l-u-color-neutral-28.l-text--variant-heading-small.l-text--weight-medium.card__address",(e)=>e.map((ele)=> ele.textContent))
const address= await page.$$eval("p.l-text.l-u-color-neutral-28.l-text--variant-body-small.l-text--weight-regular.card__street",(e)=>e.map((ele)=>ele.textContent))
const description=await page.$$eval("p.l-text.l-u-color-neutral-44.l-text--variant-body-small.l-text--weight-regular.card__description",(e)=>e.map((ele)=> [ele.textContent]))
const dados = await page.$$eval("p.l-text.l-u-color-neutral-28.l-text--variant-body-small.l-text--weight-regular.card__amenity",(e)=>e.map((ele)=> [ele]))
const Image= await page.$$eval("ul.l-carousel-image__list",(e)=>{e.map(ele=>{const child=ele.childNodes ; child.forEach(c=>console.log(c.childNodes[0].src))})})
const ImageXPath= await page.$x("/html/body/div[1]/main/section/div/form/div[2]/div[2]/div[2]/div/div[1]/div/a/div/div[1]/div[1]/div/div/ul")
console.log(ImageXPath[1])
console.log(Image)
console.log(dados)




 


/*fs.writeFile('AluguelTatuapeApartamento.json', JSON.stringify(novoObjetoImoveis, null,2), err => {
   if(err) throw new Error('something went wrong')

    console.log('well done!')
 })*/

  //await browser.close() 

}

Zap()