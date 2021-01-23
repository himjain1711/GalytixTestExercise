import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { GlobalMethods } from '../utility/globalMethods';

const globalMethods = new GlobalMethods();

export class AppPage {

  listOfJobs : ElementArrayFinder


  constructor(){
    this.listOfJobs = element.all(by.css('app-jobs ul li a'));
  }


  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return browser.getTitle() as Promise<string>;
  }

  async searchAndclickOnJob(data : any) {
    let matchedElement : ElementFinder ;
        return await this.listOfJobs.filter(async (job)=>{
          const jobTitle = await job.element(by.css('span[class = "title"]')).getAttribute('innerText');
          const jobLocation = await job.element(by.css('span[class = "location"]')).getAttribute('innerText');
          const postedDate = await job.element(by.css('span[class = "date"]')).getAttribute('innerText');
          if (jobTitle.trim() === data.jobName 
                && jobLocation.trim() == data.location 
                  && postedDate.trim() == data.postedDate) {
              matchedElement = job;
              return matchedElement;
          } 
    }).click();
  }

}
