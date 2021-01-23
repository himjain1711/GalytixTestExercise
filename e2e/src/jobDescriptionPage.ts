import {element, by, ElementFinder} from 'protractor'
import { GlobalMethods } from '../utility/globalMethods';

const globalMethods = new GlobalMethods();


export class Description{

    applyButton : ElementFinder
    constructor(){
        this.applyButton = element(by.css('app-job button'));
    }

    clickOnApplyButton(){
        globalMethods.clickOnElement(this.applyButton);
    }

}