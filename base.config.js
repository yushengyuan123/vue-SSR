const path = require('path')
module.exports = {
    output: {
        filename: '[chunk].js',
        path: path.resolve(__dirname + '/dist')
    }
}
