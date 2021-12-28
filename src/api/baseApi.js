const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require("../../config.json")
chai.use(chaiHttp)

class BaseApi {
    constructor() {
        this.chai = chai
        this.baseURL = config.url
    }

     get (url,param){
        return  chai.request(this.baseURL)
            .get(url)
            .query(param)
    }


    getStatic (url,param){
        return  chai.request(" https://www.redditstatic.com/")
            .get(url)
            .query(param)
    }

}

module.exports = BaseApi