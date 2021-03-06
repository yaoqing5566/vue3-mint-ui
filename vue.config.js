const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const  CompressionPlugin=require('compression-webpack-plugin')
const path = require('path')
let baseUrl = "./";
let outputDir="dist/build";
let pagesTitle="";
console.log("env: " + process.env.NODE_ENV, "title: " + process.env.VUE_APP_TITLE)

let proxyUrl="http://47.101.54.147/"; //开发环境代理ip
if(process.env.NODE_ENV === 'development'){//开发环境
    pagesTitle="test/";
    switch (process.env.VUE_APP_TITLE) {
        case 'server2':
            proxyUrl="http://47.101.54.1471/"; //线上环境代理ip
            break
    }

}

if(process.env.NODE_ENV === 'production'){//打包环境
    switch (process.env.VUE_APP_TITLE) {
        case 'test':  //测试环境
            outputDir="dist/test";
            pagesTitle="test/";
            break
        case 'production':  //正式环境
            outputDir="dist/production";
            break
        case 'build':  //build
            outputDir="dist/build";
            break
        case 'haizitong':  //haizitong打包到别的文件夹
            outputDir=path.resolve("D:\\bulid\\web");
            break
    }

}



module.exports = {
    // 基本路径
    baseUrl: baseUrl,
    outputDir:outputDir,
    filenameHashing: true,
    lintOnSave: false,
    runtimeCompiler: false,
    pages: {
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            title: pagesTitle,
        }
    },
    chainWebpack: config => {
        /**
         * 删除懒加载模块的 prefetch preload，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
         * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
         */
        config.plugins
            .delete('prefetch')
            .delete('preload')
        // 解决 cli3 懒加载多个问题问题 热更新失效
        config.resolve
            .symlinks(true)
        config
        // 开发环境
            .when(process.env.NODE_ENV === 'development',
                // sourcemap不包含列信息
                config => config.devtool('cheap-source-map')
            )
            // build环境
            .when(process.env.NODE_ENV === 'production', config => {
                config.optimization
                    .minimizer([
                        new UglifyJsPlugin({
                            uglifyOptions: {
                                // 移除 console
                                // 其它优化选项 https://segmentfault.com/a/1190000010874406
                                compress: {
                                    warnings: false,
                                    drop_console: true,
                                    drop_debugger: true,
                                    pure_funcs: ['console.log']
                                }
                            }
                        })
                    ])


            })
            // test
            .when(process.env.NODE_ENV === 'test/', config => {

            })
    },
    configureWebpack: () => {
        //gzip压缩 需要的时候打开进行配置
        // return{
        //     plugins:[new CompressionPlugin({
        //         test:/\.js$|\.html$|\.css/,
        //         threshold:10240,
        //         deleteOriginalAssets:false
        //     })]
        // }
    },
    //vueLoader: {},
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {
                data: `@import "@/sass/common.scss";`
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    parallel: require('os').cpus().length > 1,

    //dll: false,
    pwa: {},
    // chainWebpack(config) {
    //     console.log(config.plugins.get('html'));
    // },
// webpack-dev-server 相关配置

    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8088,
        https: false,
        proxy: {// 设置代理
            '/': {
                target: proxyUrl,
                changeOrigin: true,
                ws: false
            }
        },
        before: app => {

        }
    },
// 第三方插件配置
    pluginOptions: {

    }
}



