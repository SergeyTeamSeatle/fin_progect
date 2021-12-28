const Login = require("./login")
const config = require("../../config.json")
const TestedUser = config.user
const urlBase = config.url
const chai=require("chai")
const expect = chai.expect;
const mlog = require('mocha-logger');

class Post extends Login {

    constructor(page) {
        super(page);
        this.postTextBox=this.page.locator( 'xpath=.//input[@name="createPost"]');
        this.postTitle= this.page.locator('xpath=.//textarea[@placeholder="Title"]');
        this.postText= this.page.locator('xpath=.//div[@role="textbox"]');
        this.postCommunity=this.page.locator('xpath=.//input[@placeholder="Choose a community"]')
        this.postButton=this.page.locator('xpath=.//button[.="Post"][@role="button"]')
        this.firstPost=this.page.locator('xpath=.//a[@data-click-id="body"][1]')
        this.posts='xpath=.//a[@data-click-id="body"][1]'
        this.postTitleTextMain= this.page.locator('xpath=.//div[@data-test-id="post-content"]//h1')
        this.postTextMain= this.page.locator('xpath=.//div[@data-test-id="post-content"]//p')
        this.commentTextBox= this.page.locator('xpath= .//div[@role="textbox"]')
        this.commentButton= this.page.locator('xpath= .//button[@type="submit"]')
        this.commentTextFirst= this.page.locator('xpath=  .//div[@data-test-id="comment"][1]')
        this.commentUser= this.page.locator('xpath=  .//div[@data-testid="post-comment-header"]/span/div//a')
        this.postMenu= this.page.locator('xpath= .//div[@data-test-id="post-content"]//button[@aria-label="more options"]')
        this.postMenuDelete= this.page.locator('text=delete')
        this.postDelete= this.page.locator('xpath=.//button[.="Delete post"]')

    }

    async goto() {
        await super.goto(urlBase);
    }


    async newPost(){
        mlog.log('---- click new post');
        await this.postTextBox.click()
        mlog.log('---- get Date');
        const date = new Date();
        mlog.log('---- fill Title post');
        await this.postTitle.fill("text post time:"+date)
        mlog.log('---- select Community');
        await this.postCommunity.fill("u/Stest_AU")
        await this.page.keyboard.press('Enter');
        mlog.log('---- fill text post');
        await this.postText.fill("test text for post")
        mlog.log('---- click post');
        await this.postButton.click()
        await this.page.waitForTimeout(1000)
         return{title:"text post time:"+date,text:"test text for post"}

    }

    async checkNewPost() {
        mlog.log('---- go to my post page');
        await super.goto(urlBase + "user/Stest_AU/posts/")
        mlog.log('---- get title Mini');
        const titleMini = await this.firstPost.textContent()
        await this.firstPost.click()
        mlog.log('---- get title ');
        const titleMain = await this.postTitleTextMain.textContent()
        mlog.log('---- get text');
        const textMain = await this.postTextMain.textContent()
        return {titleMini: titleMini, titleMain: titleMain, textMain: textMain}
    }

    async addComment(){
        mlog.log('---- go to my post page');
        await super.goto(urlBase+"user/Stest_AU/posts/")
        mlog.log('---- select first Post');
        await this.firstPost.click()
        mlog.log('---- fill new comment');
        await this.commentTextBox.fill("new comment !!!")
        mlog.log('---- click comment');
        await this.commentButton.click()
        const textComment =  await this.commentTextFirst.textContent()
        const userNameComment =  await this.commentUser.textContent()
        return {textComment:textComment,userNameComment:userNameComment}
    }

    async deletePost(){
        mlog.log('---- go to my post page');
        await super.goto(urlBase+"user/Stest_AU/posts/")
        mlog.log('---- select first Post');
        await this.firstPost.click()
        mlog.log('---- click Menu');
        await this.postMenu.click()
        mlog.log('---- click Delete');
        await this.postMenuDelete.click()
        mlog.log('---- Delete');
        await this.postDelete.click()
    }
    async getPostCount(){
        mlog.log('---- go to my post page');
        await super.goto(urlBase+"user/Stest_AU/posts/")
        mlog.log('---- get Count Posts');
        let postList =await this.page.$$(this.posts)
        return postList.length
    }


}
module.exports = Post