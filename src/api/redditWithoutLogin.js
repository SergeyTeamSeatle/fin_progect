const BaseApiChaiHttp = require("./baseApi")

class RedditWithoutLogin extends BaseApiChaiHttp {
    constructor() {
        super();
    }


    async getTrendingSearches() {
        return await this.get("api/trending_searches_v1.json", {
            withAds: 1,
            subplacement: "tile",
            raw_json: 1,
            gilding_detail: 1
        })
    }




    async getMe() {
        return await this.get("api/v1/me", {}
        )
    }


    async getSavedCategories() {
        return await this.get("api/saved_categories", {
        })
    }


}


module.exports =  RedditWithoutLogin