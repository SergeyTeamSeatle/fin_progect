const Base = require("./base")
const config = require("../../config.json")
const TestedUser = config.user
const urlBase = config.url
const chai=require("chai")
const expect = chai.expect;
const mlog = require('mocha-logger');

class Login extends Base {
    loginTextBox
    passwordTextBox
    loginButton
    errorPassAndLogin
    successLogin
    constructor(page) {
        super(page);
        this.loginTextBox=this.page.locator( 'id=loginUsername');
        this.passwordTextBox= this.page.locator ('id=loginPassword');
        this.loginButton= this.page.locator('xpath=.//button[@class="AnimatedForm__submitButton m-full-width"]');
        this.errorPassAndLogin= this.page.locator('xpath=//fieldset[@class="AnimatedForm__field m-required login hideable m-invalid"]/div');
        this.successLogin=this.page.locator('xpath=.//div[@class="AnimatedForm__submitStatus m-success"]/span')
        this.loggedUser=this.page.locator('xpath= .//span[@id="email-collection-tooltip-id"]/span/span[1]')


    }

    async goto(url) {
        await super.goto(url);
    }

    async login(context) {
        mlog.log('---- go to login page');
        await this.page.goto(urlBase + "login/");
        mlog.log('---- enter login');
        await this.loginTextBox.fill(TestedUser.login)
        mlog.log('---- enter pass');
        await this.passwordTextBox.fill(TestedUser.pass)
        mlog.log('---- click Button');
        await this.loginButton.click()
        mlog.log('---- wait load page');
        expect(await this.loggedUser.textContent()).to.equal("Stest_AU");
        mlog.log('---- get cookies');
        const browserData = await context.storageState()
        global.cookies = browserData.cookies
    }

    async  chekLogin (context){
        mlog.log('---- check cookies');
        if (global.cookies === undefined) {
            await this.login(context)
        } else {
            await context.addCookies(global.cookies)
        }
    }

    async enterUsernameAndPassword(user){
        mlog.log('---- go to login page');
        await this.page.goto(urlBase + "login/");
        mlog.log('---- enter login');
        await this.loginTextBox.fill(user.login)
        mlog.log('---- enter pass');
        await this.passwordTextBox.fill(user.pass)
        mlog.log('---- click Button');
        await this.loginButton.click()

    }
    async getErrorText(){
        return  this.errorPassAndLogin.textContent()

    }
    async getSuccessLoginText(){
        return  this.successLogin.textContent()
    }

    async getLoggedUser(){
        return  this.loggedUser.textContent()
    }

}
module.exports = Login