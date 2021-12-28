const playwright = require("playwright")
const Login= require("../src/page-objects/login")
const config = require("../config.json")
const browserOpts = config.playwright
const browserCurrent = config.browser
const successUser=config.user
const chai=require("chai")
const expect = chai.expect;
const mlog = require('mocha-logger');
const failUser={
    "login": "Stest_AU_123",
    "pass": "Ser!23"}


describe('login tests', function () {
    let browser
    let context

    beforeEach(async ()=>{
        mlog.log('-->open browser');
        browser = await playwright[browserCurrent].launch(browserOpts);
        context = await browser.newContext()
    })
    afterEach(async ()=>{
        mlog.log('<--close browser');
        await browser.close();
    })
    it('fail login', async () => {
        let page = await context.newPage();
        mlog.log('---- page create');
        let login = new Login(page)
        await login.enterUsernameAndPassword(failUser)
        mlog.log('---- tests check');
        expect(await login.getErrorText()).to.equal('Incorrect username or password');
    })

    it('success login', async () => {
        mlog.log('---- page create');
        let page = await context.newPage();
        let login = new Login(page)

        await login.enterUsernameAndPassword(successUser)
        mlog.log('---- tests check');
        expect(await login.getSuccessLoginText()).to.equal('You are now logged in. You will soon be redirected');
        expect(await login.getLoggedUser()).to.equal("Stest_AU");
        expect(await page.url()).to.equal("https://www.reddit.com/");

    })


})