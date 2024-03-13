const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent')
const ApartamentoVendaSP='https://sp.olx.com.br/sao-paulo-e-regiao/imoveis/excelente-apartamento-unico-dono-e-reformado-1245752080?lis=listing_1001'

let detalhesdoImovel =[];

const wspg = async()=>{

    const browser = await puppeteer.launch({
        headless:false
    });
try {
    const page = await browser.newPage();
    await page.setUserAgent(randomUseragent.getRandom())
    await page.goto(ApartamentoVendaSP);

    await page.waitForSelector(".ad__sc-1l883pa-2.bdcWAn");
    const name = await page.$eval(".ad__sc-1l883pa-2.bdcWAn", (el)=> el.textContent)
    console.log(name)
    await browser.close()  
} catch (error) {
    
}
    
   

      


}










const Trivagocom="https://www.trivago.com.br/pt-BR"

const trivago=async()=>{
    const browser = await puppeteer.launch({
        headless:false
       });
    const page = await browser.newPage();
    await page.setUserAgent(randomUseragent.getRandom())
    await page.goto(Trivagocom)
    await page.waitForSelector("button.group.w-full")
    const destino = await page.$$eval("button.group.w-full", (el) =>console.log (el)) 
    const data= await page.$$eval("span.text-m.leading-normal.font-bold.truncate.text-grey-900", (el)=>console.log(el) )



}




const linkimoveis=async(lkpesquisa)=>{
    const dados=[]
    const browser=await puppeteer.launch({
        defaultViewport:null
    })

    const page=await browser. newPage()
    await page.setUserAgent(randomUseragent.getRandom())
    await page.goto(lkpesquisa)

    const options = await page.$$eval("",(opts)=>{
        opts.map((Option)=>{Option.attributes[6].nodeValue});
         })
await browser.close()

await options. map((lnk)=>{
    constolnk=lnk
    dados.push(olnk);

})

 console.log(dados)

        }

        const MercdadoLivre="https://www.mercadolivre.com.br/"

        const imagensImoveis =async(imagens)=>{
            const dados=[]
            const browser=await puppeteer.launch({
                defaultViewport:null,
                headless:false
            })

            const page=await browser.newPage()
            await page.setUserAgent(randomUseragent.getRandom())
            await page.goto(imagens)
            await page.waitForXPath("/html/body/header/div/div[2]/form/input");
    const consulta =await page.$x('/html/body/header/div/div[2]/form/input')
          await consulta[0].type('carros');
         await page.keyboard.press('Enter');
         await page.waitForXPath("/html/body/main/div/div[2]/section/ol")
         await page.waitForSelector("li.ui-search-result__wrapper")
         const verProduto= await page.$x("/html/body/main/div/div[2]/section/ol/div[2]/li[1]/div/div")
console.log(verProduto[0])


        }
        
        imagensImoveis(MercdadoLivre)

