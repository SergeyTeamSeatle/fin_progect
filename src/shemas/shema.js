const me = require("./me");
const savedCategoriesError = require("./saved-categories-error");
const trendingSearches= require("./trending-searches")
const shema={
    me,
    savedCategoriesError,
    trendingSearches
}

module.exports=shema