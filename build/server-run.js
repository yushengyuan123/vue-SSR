const webpack = require('webpack')
const config = require('../webpack.server.config')


webpack(config, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
    }))
});
