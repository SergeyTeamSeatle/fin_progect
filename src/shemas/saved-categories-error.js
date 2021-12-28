const jsonData = {
    title: 'error',
    type: 'object',
    required: ["errors"],
    properties: {
        errors: {
            type: 'array',
            minItems: 1,

         }
    }
}


const savedCategoriesError = {
    title: 'schema v1 ',
    type: 'object',
    required: ["json"],
    properties: {
        json: jsonData,
    }
};
module.exports = savedCategoriesError