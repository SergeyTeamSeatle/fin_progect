const api = require("../src/api/api")


describe("test api", function () {
    it('me', async function () {
        let res = await api.redditWithoutLogin.getMe()
        res.should.to.have.status(200)
        res.body.should.to.be.jsonSchema(api.shema.me);
       });

    it('Trending Searches ', async function () {
        let res = await api.redditWithoutLogin.getTrendingSearches()
        res.should.to.have.status(200)
        res.body.should.to.be.jsonSchema(api.shema.trendingSearches);
        res.body.trending_searches.length.should.to.be.not.equal(0)
    });

      it('Saved Categories', async function () {
        let res = await api.redditWithoutLogin.getSavedCategories()
        res.should.to.have.status(200)
        res.body.should.to.be.jsonSchema(api.shema.savedCategoriesError);
        res.text.should.to.be.equal('{"json": {"errors": [["USER_REQUIRED", "Please log in to do that.", null]]}}');
    });

})