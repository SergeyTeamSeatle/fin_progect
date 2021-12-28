const playwright = require("playwright")
const Post = require("../src/page-objects/post")
const config = require("../config.json")
const browserOpts = config.playwright
const browserCurrent = config.browser
const chai = require("chai")
chai.should();
let createdPost = 0
let deletedPost=0
const mlog = require('mocha-logger');


describe('new post tests', function () {
    let browser
    let context

    beforeEach(async () => {
        mlog.log('-->open browser');
        browser = await playwright[browserCurrent].launch(browserOpts);
        context = await browser.newContext()
    })
    afterEach(async () => {
        mlog.log('<-- close browser');
        await browser.close();
    })
    after(async () => {
        if (deletedPost==0){
            mlog.log('--- delete post after tests ---');
            browser = await playwright[browserCurrent].launch(browserOpts);
            context = await browser.newContext()
            let page = await context.newPage();
            let post = new Post(page)
            await post.chekLogin(context)
            await post.deletePost()
            await page.waitForTimeout(1000)
            await browser.close();
        }
        })



    it('create new post', async () => {
        mlog.log('---- create page');
        let page = await context.newPage();
        let post = new Post(page)
        mlog.log('---- chek Login cookies');
        await post.chekLogin(context)
        mlog.log('---- goto url for test');
        await post.goto()

        const enterText = await post.newPost()
        const checkText = await post.checkNewPost()
        const countPost = await  post.getPostCount()
        countPost.should.equal(1);
        checkText.titleMain.should.equal(enterText.title);
        checkText.titleMini.should.equal(enterText.title);
        checkText.textMain.should.equal(enterText.text);
        createdPost = 1
    })

    it('add comment', async () => {
        let page = await context.newPage();
        let post = new Post(page)
        await post.chekLogin(context)
        if (createdPost == 10) {
            await post.goto()
            await post.newPost()
        }
       const comment =await post.addComment()
        comment.textComment.should.equal("new comment !!!")
        comment.userNameComment.should.equal("Stest_AU")
        createdPost = 1
    })
    it('delete post', async () => {
        let page = await context.newPage();
        let post = new Post(page)
        await post.chekLogin(context)
        if (createdPost == 0) {
            await post.goto()
            await post.newPost()
        }
        await post.deletePost()
        const countPost = await  post.getPostCount()
        countPost.should.equal(0);
        deletedPost = 1
    })

})