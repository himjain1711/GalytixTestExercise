import {element, by, ElementFinder, browser} from 'protractor'
import { GlobalMethods } from '../utility/globalMethods';

const globalMethods = new GlobalMethods();


export class ApplyForm{

    inputName : ElementFinder
    inputEmail : ElementFinder
    inputResume : ElementFinder
    applyButton : ElementFinder
    successMessage : ElementFinder

    constructor(){
        this.inputName = element(by.css('input[name = "name"]'));
        this.inputEmail = element(by.css('input[name = "email"]'));
        this.inputResume = element(by.css('input[name = "resume"]'));
        this.applyButton = element(by.css('button[type = "submit"]'));
        this.successMessage = element(by.css('div [class = "success"]'));
    }

    enterFormInformation(personName : string, emailId  : string, resumePath  : string){
        globalMethods.setValueToTextField(this.inputName, personName );
        globalMethods.setValueToTextField(this.inputEmail, emailId);
        globalMethods.setValueToTextField(this.inputResume, resumePath);
        browser.sleep(2000);
    }

    clickOnApplyButton(){
        globalMethods.clickOnElement(this.applyButton);
    }

    getSuccessMessage(){
        return globalMethods.getElementText(this.successMessage, 'Application submitted');
    }

}