

const item = {
    title: 'data in array',
    type: 'object',
    required: ["group","subreddit_occurences","results","query_string","display_string","is_subreddit_whitelisted"],
    properties: {
        group:{type:'array'},
        subreddit_occurences:{type:'number'},
            results:{type:'object'},
query_string:{type:'string'},
display_string:{type:'string'},
is_subreddit_whitelisted:{type:'boolean'},

    }
};


const arrayData = {
    title: ' array  trendingSearches ',
    type: 'array',
    items: item
}
var trendingSearches = {
    title: 'schema trendingSearches ',
    type: 'object',
    required: ["trending_searches"],
    properties: {
        trendingSearches: arrayData,
        count: {
            type: 'number',
            maximum: 5
        }
    }
};
module.exports = trendingSearches