
const Encore = require('@symfony/webpack-encore'),
      path = require('path'),
      SpriteLoaderPlugin = require('svg-sprite-loader/plugin'),

      BUILD_MODE = process.env.BUILD_MODE || 'dev',
      IS_DEV_SERVER = process.env.NODE_DEV_SERVER || false,
      dateTimeStamp = (new Date()).getTime(),

      // Путь до и имена файлов точек входа
      pathToEntries = './assets/entry-points/',
      // Объект с именами файлов точек входа
      entries = require('./assets/entry-import.js');


Encore
      .configureRuntimeEnvironment(BUILD_MODE)

      .setOutputPath('htdocs/assets/build')

      // public path used by the web server to access the output path
      .setPublicPath('/assets/build')

      // Запрещаем файл runtime.js
      .disableSingleRuntimeChunk()

      // Подключаем less
      .enableLessLoader()

      // Очистка дирректории хранения скомпилированных файлов перед компиляцией
      .cleanupOutputBeforeBuild()

      // Создавать карты кода при режиме "Не prod"
      .enableSourceMaps(!Encore.isProduction())

      // Указываем куда и как класть скомпилированные файлы
      .configureFilenames({
          js: 'js/[name]' + '.js',
          css: 'css/[name]' + '.css',
          images: 'img/[name]' + dateTimeStamp + '.[ext]',
          fonts: 'fonts/[name].[ext]'
      })

      .disableImagesLoader()

      .addRule({
          test: /\.(png|jpg|jpeg|gif|ico|webp)$/,
          loader: 'file-loader',
          options: {
                name: 'img/[name]' + dateTimeStamp + '.[ext]'
          }
      })

      .addRule({
          test: /\.svg$/,
          loader: 'file-loader',
          options: {
                emitFile: false,
                name: 'img/sprite' + dateTimeStamp + '.svg#[name]-usage'
          }
      })

    .addLoader({
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
            extract: true,
            spriteFilename: 'img/sprite' + dateTimeStamp + '.svg'
        }
    })

    .addPlugin(new SpriteLoaderPlugin({}))

    .configureBabel(babelConf => {
            babelConf.presets = [['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: 3
            }]];
            babelConf.plugins = ['@babel/plugin-proposal-class-properties'];
        });

if (IS_DEV_SERVER) {
    Encore
        .disableCssExtraction()
        .enableSourceMaps(false);
}

// Устанавливаем точки входа
for (let key in entries) {
    Encore.addEntry(key, pathToEntries + entries[key]);
}

// Получение объекта конфигурации Webpack
let webpackConf = Encore.getWebpackConfig();

webpackConf.devServer = {
    contentBase: path.join(__dirname, 'htdocs'),
    // publicPath: "http://localhost:8080",
    compress: true,
    hot: true,
    port: 9014
};

module.exports = webpackConf;