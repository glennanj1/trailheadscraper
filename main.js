let a = ["https://trailblazer.me/id/e-m-wilson", "https://trailblazer.me/id/jlontok", "https://trailblazer.me/id/glennanj1", "https://trailblazer.me/id/wrembish", "https://trailblazer.me/id/juliaweakley", "https://trailblazer.me/id/vgeorgiev4", "https://trailblazer.me/id/ajbankler", "https://trailblazer.me/id/camronmiller", "https://trailblazer.me/id/liamhunt1789", "https://trailblazer.me/id/zthreatt", "https://trailblazer.me/id/basselnader", "https://trailblazer.me/id/osade4", "https://trailblazer.me/id/jgaten", "https://trailblazer.me/id/bashawa", "https://trailblazer.me/id/chrisatd1", "https://trailblazer.me/id/edwerner", "https://trailblazer.me/id/vimmi", "https://trailblazer.me/id/matt24", "https://trailblazer.me/id/colinpoirier", "https://trailblazer.me/id/shiorimatsuoka", "https://trailblazer.me/id/jackalope", "https://trailblazer.me/id/wayneh000", "https://trailblazer.me/id/mdn117", "https://trailblazer.me/id/fetylerb", "https://trailblazer.me/id/cdirkswager", "https://trailblazer.me/id/smuhammad16", "https://trailblazer.me/id/canbin", "https://trailblazer.me/id/merayoussef", "https://trailblazer.me/id/callthecapital"]

const puppeteer = require('puppeteer');

a.forEach(url => {
        (async function scrape() {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url);
        
        let score = await page.evaluate(() => {
            let scores = document.querySelector("#profile-sections-container > div > tbme-rank").shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div.stats-container > lwc-tbui-tally:nth-child(2)").shadowRoot.querySelector("span > span.tally__count.tally__count_success").innerText
            let name = document.querySelector("#profile-sections-container > div > tbme-about-me").shadowRoot.querySelector("lwc-tbui-card > div.heading > div.details > h1").innerText
            let badges = document.querySelector("#profile-sections-container > div > tbme-rank").shadowRoot.querySelector("lwc-tds-theme-provider > lwc-tbui-card > div.stats-container > lwc-tbui-tally:nth-child(1)").shadowRoot.querySelector("span > span.tally__count.tally__count_success").innerText
            
            let profile = {
                name: name,
                badges: badges,
                scores: scores
            }
    
            return profile;
        }) 
        console.log(score);
        await browser.close();
    })();
})