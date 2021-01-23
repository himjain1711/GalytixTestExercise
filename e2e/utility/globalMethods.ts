import { ElementFinder, ExpectedConditions, browser } from "protractor";

export class GlobalMethods{

    constructor(){
    }

    async setValueToTextField(fieldName:ElementFinder, fieldValue:string){
            try{
                await browser.wait(ExpectedConditions.presenceOf(fieldName),5000,`${fieldName} is not present on UI.`);
                await fieldName.sendKeys(fieldValue)
            }
            catch(err){
                console.log(err)
            }
    }

    async clickOnElement(elementName:ElementFinder){
        if(typeof elementName !== 'undefined'){
            await browser.wait(ExpectedConditions.visibilityOf(elementName),5000,`${elementName} is not visible on UI.`);
            await browser.wait(ExpectedConditions.elementToBeClickable(elementName),5000,`${elementName} is not clickable or disabled.`);
            await browser.actions().mouseMove(elementName).perform();
            await browser.actions().click().perform();
        }
    }

    async getElementText(elementName:ElementFinder,text:string):Promise<string>{
        await browser.wait(ExpectedConditions.textToBePresentInElement(elementName,text),5000,
                    `${text} is not belong to ${elementName}`)
        return await elementName.getText();
    }
}