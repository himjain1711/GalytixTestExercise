import { AppPage } from './app.po';
import { Description } from './jobDescriptionPage';
import {ApplyForm} from './applyForm'
import using from "jasmine-data-provider";
const path = require('path')
import {jobData} from '../testData/JobTestData';

let resumeToUpload = '../testData/Sample_resume_file.docx';
let resumePath = path.resolve(__dirname, resumeToUpload);

import { browser, logging } from 'protractor';

const description = new Description();
const applyForm = new ApplyForm();

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('GalytixTestExercise');
  });

  using(jobData, (data, des) => {
    it('Apply for multiple Job position based on location and posted date',() =>{
      page.searchAndclickOnJob(data);
      browser.sleep(4000);
      description.clickOnApplyButton();
      applyForm.enterFormInformation('Himanhsu Jain', 'testEmail@gmail.com', resumePath);
      browser.sleep(10000);
      applyForm.clickOnApplyButton();
      expect(applyForm.getSuccessMessage()).toEqual('Application submitted');
    })
  })
  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
