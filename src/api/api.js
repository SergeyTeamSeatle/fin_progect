const BaseApiChaiHttp   =require("./baseApi")
const redditWithoutLogin= require("./redditWithoutLogin")
const chai = require("chai")
const shema = require("../shemas/shema");
chai.use(require('chai-json-schema'));


class Api extends BaseApiChaiHttp{
    should= chai.should();
    redditWithoutLogin= new redditWithoutLogin ()
    shema=shema
}
module.exports = new Api()