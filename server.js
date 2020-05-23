const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    inline:true,
    historyApiFallback: true,
    stats: {colors:true}        
}).listen(3000, (err) => {
    if (err){
        return console.log(err);
    }

    console.log('Linstening on http://localhost:3000');
})