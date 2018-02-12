module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        JohnnyMenu: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
}