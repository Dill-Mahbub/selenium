import {Builder,By} from "selenium-webdriver";

class Base{
    constructor(){
        this.driver = new Builder().forBrowser('chrome').build();
    }

    async openBrowser(url){
        await this.driver.get(url);
    }

    async closeBrowser(){
        await this.driver.quit();
    }
}
const url = "https://www.google.com/";

const result = new Base();
await result.openBrowser(url);
await result.closeBrowser();