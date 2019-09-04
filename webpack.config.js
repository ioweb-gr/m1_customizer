/*
 * Copyright (c) 2018. IOWEB TECHNOLOGIES
 */

// webpack.config.js
let Encore = require('@symfony/webpack-encore');
let  path = require('path');
let fs = require('fs');

let outputPath = 'skin/frontend/base/default/ioweb/customizer/build';
if(!fs.existsSync(path.resolve(outputPath))){
    console.log(path.resolve(outputPath));
    fs.mkdirSync(path.resolve(outputPath), {
        recursive: true,
        mode: 0o755
    });
}

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('skin/frontend/base/default/ioweb/customizer/build')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/skin/frontend/base/default/ioweb/customizer/build')

    // will create public/build/app.js and public/build/app.css
    .addEntry('ioweb-custom', './assets/js/ioweb-custom.js')
    // .addEntry('product-carousel', './assets/js/product-carousel.js')

    // allow legacy applications to use $/jQuery as a global variable
    // .autoProvidejQuery()

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()

    // allow sass/scss files to be processed
    .enableSassLoader()
;

// export the final configuration

let $config = Encore.getWebpackConfig();
$config.watchOptions = {
    aggregateTimeout: 300,
    poll: 1000
};

module.exports = $config;